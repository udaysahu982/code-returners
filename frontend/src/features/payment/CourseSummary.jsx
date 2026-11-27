import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import useBasePath from '../../hooks/useBasePath';
import PriceBreakdown, { formatINR } from './PriceBrekdown';
import PaymentSuccess from './PaymentSuccess';
import useRazorpayPayment from './useRazorpayPayment';
import getErrorMessage from '../../errorAlert/getErrorMessage';

const COURSE_API = 'http://localhost:8080/api/courses/viewCourse';
const PAYMENT_API = 'http://localhost:8080/api/payment';

const CourseSummary = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const base = useBasePath();

    const [course, setCourse] = useState(null); // title, description, level...
    const [price, setPrice] = useState(null);   // price, discount, GST, total (from backend)
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    // Razorpay logic lives in the hook, so this page only reads: startPayment()
    const { startPayment, paying, error: paymentError } = useRazorpayPayment({
        courseId,
        courseTitle: course?.title,
        onSuccess: () => setPaymentSuccess(true),
    });

    // Load course details and price breakdown when the page opens
    useEffect(() => {
        const loadData = async () => {
            try {
                const [courseRes, priceRes] = await Promise.all([
                    axios.get(`${COURSE_API}/${courseId}`),
                    axios.get(`${PAYMENT_API}/summary/${courseId}`),
                ]);
                setCourse(courseRes.data);
                setPrice(priceRes.data);
            } catch (err) {
                setLoadError(getErrorMessage(err, 'Unable to load course summary.'));
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [courseId]);

    // ---------- Screens ----------

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-lg text-slate-500">Loading course summary...</p>
            </div>
        );
    }

    if (loadError || !course || !price) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-3">
                <h2 className="text-xl font-bold text-slate-800">Course not found</h2>
                <p className="text-slate-500">{loadError || 'Course does not exist.'}</p>
                <button
                    onClick={() => navigate(-1)}
                    className="rounded-lg bg-blue-600 px-5 py-2 text-white"
                >
                    Go Back
                </button>
            </div>
        );
    }

    if (paymentSuccess) {
        return <PaymentSuccess onContinue={() => navigate(`${base}/mycourses`)} />;
    }

    // ---------- Main page ----------

    return (
        <div className="h-screen overflow-y-auto bg-slate-50 px-4 py-8 md:px-10">
            <div className="mx-auto max-w-5xl">

                <div className="mb-6 text-sm text-slate-500">
                    Courses / {course.title} / Checkout
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* LEFT: what the user is buying */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">

                            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                                {course.categoryName || course.category?.name || 'Course'}
                            </span>

                            <h1 className="mt-5 text-3xl font-bold text-slate-900">
                                {course.title}
                            </h1>

                            <p className="mt-4 leading-7 text-slate-600">
                                {course.description}
                            </p>

                            <div className="mt-6 text-sm text-slate-600">
                                <span className="font-semibold text-slate-800">Level</span>
                                <p>{course.level || 'All Levels'}</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: order summary and pay button */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">

                            <h2 className="text-xl font-bold text-slate-800">Order summary</h2>

                            <PriceBreakdown price={price} />

                            {paymentError && (
                                <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                                    {paymentError}
                                </p>
                            )}

                            <button
                                onClick={startPayment}
                                disabled={paying}
                                className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {paying ? 'Processing...' : `Pay ${formatINR(price.totalAmount)}`}
                            </button>

                            <button
                                onClick={() => navigate(-1)}
                                disabled={paying}
                                className="mt-3 w-full rounded-xl border border-slate-300 py-3 font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-60"
                            >
                                Go Back
                            </button>

                            <p className="mt-4 text-center text-xs text-slate-500">
                                Secure payment powered by Razorpay.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseSummary;