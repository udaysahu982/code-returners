import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import useBasePath from '../../hooks/useBasePath';

const API = 'http://localhost:8080/api/payment';
const COURSEAPI='http://localhost:8080/api/courses/viewCourse'

const Checkout = () => {

    const { courseId } = useParams();
    console.log(courseId);
    const location = useLocation();
    const navigate = useNavigate();
    const base = useBasePath();

    const totalAmount = location.state?.totalAmount;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const [course, setCourse] = useState(null);
    

    useEffect(()=>{
         setLoading(true);
         setError('');

        const fetchData = async() => {
            try{
                const response = axios.get(`${COURSEAPI}/${courseId}`)
            setCourse(response.data);

     } catch (err) {
        setError(
          err.response?.data?.message || 'Unable to load course details.'
        );
      } finally {
        setLoading(false);
      }

        }

    },[])

    const handlePayment = async () => {

        try {
            setLoading(true);
            setError('');

            // 1. Ask backend to create a Razorpay order
            const orderResponse = await axios.post(
                `${API}/createorder`,
                {
                    courseId: Number(courseId)
                }
            );

            const order = orderResponse.data;

            // 2. Open Razorpay checkout
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency || 'INR',
                name: 'CodeReturners',
                description: 'Course Purchase',
                order_id: order.orderId,

                handler: async function (response) {

                    try {
                        // 3. Send payment details to backend for verification
                        await axios.post(`${API}/verify-payment`, {
                            courseId: Number(courseId),
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature
                        });

                        // 4. Show success only after backend verification succeeds
                        setPaymentSuccess(true);

                    } catch (err) {
                        setError(
                            err.response?.data?.message ||
                            'Payment verification failed. Please contact support.'
                        );
                    }
                },

                modal: {
                    ondismiss: function () {
                        setLoading(false);
                    }
                },

                theme: {
                    color: '#2563eb'
                }
            };

            if (!window.Razorpay) {
                throw new Error('Razorpay checkout script is not loaded.');
            }

            const razorpay = new window.Razorpay(options);

            razorpay.on('payment.failed', function (response) {
                setError(
                    response.error?.description || 'Payment failed. Please try again.'
                );
                setLoading(false);
            });

            razorpay.open();

        } catch (err) {
            setError(
                err.response?.data?.message ||
                err.message ||
                'Unable to start payment. Please try again.'
            );
            setLoading(false);
        }
    };

    if (paymentSuccess) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
                <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">

                    <div className="text-5xl text-green-600">✓</div>

                    <h2 className="mt-4 text-2xl font-bold text-slate-800">
                        Payment Successful!
                    </h2>

                    <p className="mt-2 text-slate-500">
                        Your payment has been verified successfully.
                    </p>

                    <button
                        onClick={() => navigate(`${base}/my-courses`)}
                        className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                    >
                        Go to My Courses
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                <h2 className="text-2xl font-bold text-slate-800">
                    Checkout
                </h2>

                <p className="mt-2 text-slate-500">
                    Complete your course purchase securely.
                </p>

                <div className="mt-6 rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">
                        Course Name: {course.title}
                    </p>

                    <p className="mt-2 text-lg font-bold text-slate-800">
                        Amount shown: ₹
                        {course.price}
                    </p>
                </div>

                {error && (
                    <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                        {error}
                    </p>
                )}

                <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>

                <button
                    onClick={() => navigate(-1)}
                    disabled={loading}
                    className="mt-3 w-full rounded-xl border border-slate-300 py-3 font-medium text-slate-600 hover:bg-slate-50"
                >
                    Go Back
                </button>

            </div>
        </div>
    );
};

export default Checkout;