import { useState } from 'react';
import axios from 'axios';

const PAYMENT_API = 'http://localhost:8080/api/payment';

// Backend can send a plain string or { message }, so handle both
export const getErrorMessage = (err, fallback) => {
    const data = err.response?.data;
    if (typeof data === 'string' && data) return data;
    return data?.message || err.message || fallback;
};

/**
 * Handles the whole payment flow:
 *   1. ask backend to create a Razorpay order (backend decides the amount)
 *   2. open the Razorpay popup
 *   3. send the payment result to backend for verification
 *
 * Usage:
 *   const { startPayment, paying, error } = useRazorpayPayment({ courseId, courseTitle, onSuccess });
 */
const useRazorpayPayment = ({ courseId, courseTitle, onSuccess }) => {
    const [paying, setPaying] = useState(false);
    const [error, setError] = useState('');

    // Called after the user pays. Backend checks the signature before we show success.
    const verifyPayment = async (response) => {
        try {
            await axios.post(`${PAYMENT_API}/verify-payment`, {
                courseId: Number(courseId),
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
            });
            onSuccess();
        } catch (err) {
            setError(getErrorMessage(err, 'Payment verification failed. Please contact support.'));
            setPaying(false);
        }
    };

    const startPayment = async () => {
        try {
            setPaying(true);
            setError('');

            if (!window.Razorpay) {
                throw new Error('Razorpay script is not loaded. Add it to index.html.');
            }

            // Step 1: backend creates the order and decides the amount (with GST)
            const { data: order } = await axios.post(`${PAYMENT_API}/createorder`, {
                courseId: Number(courseId),
            });

            // Step 2: open the Razorpay popup
            const razorpay = new window.Razorpay({
                key: order.key || import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency || 'INR',
                order_id: order.orderId,
                name: 'CodeReturners',
                description: courseTitle || 'Course Purchase',
                theme: { color: '#2563eb' },

                handler: verifyPayment,                      // payment done
                modal: { ondismiss: () => setPaying(false) } // popup closed
            });

            razorpay.on('payment.failed', (response) => {
                setError(response.error?.description || 'Payment failed. Please try again.');
                setPaying(false);
            });

            razorpay.open();
        } catch (err) {
            setError(getErrorMessage(err, 'Unable to start payment. Please try again.'));
            setPaying(false);
        }
    };

    return { startPayment, paying, error };
};

export default useRazorpayPayment;