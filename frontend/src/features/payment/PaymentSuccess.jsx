import React from 'react';

const PaymentSuccess = ({ onContinue }) => (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
            <div className="text-5xl text-green-600">✓</div>

            <h2 className="mt-4 text-2xl font-bold text-slate-800">Payment successful</h2>

            <p className="mt-2 text-slate-500">
                Your payment was verified and the course is now in your account.
            </p>

            <button
                onClick={onContinue}
                className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
                Go to My Courses
            </button>
        </div>
    </div>
);

export default PaymentSuccess;