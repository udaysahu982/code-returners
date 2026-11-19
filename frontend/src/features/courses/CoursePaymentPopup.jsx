
import React from 'react';

const CoursePaymentPopup = ({
    course,
    onClose,
    onConfirm
}) => {

    const gstRate = 18;

    const coursePrice = Number(course?.price || 0);
    const gstAmount = (coursePrice * gstRate) / 100;
    const totalAmount = coursePrice + gstAmount;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">

            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between">

                    <h2 className="text-xl font-bold text-slate-800">
                        Order Summary
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl text-slate-400 hover:text-red-500"
                    >
                        &times;
                    </button>

                </div>

                <p className="mt-2 text-sm text-slate-500">
                    Review your charges before proceeding with payment.
                </p>

                {/* Course Details */}
                <div className="mt-6 rounded-xl bg-slate-50 p-4">

                    <h3 className="font-semibold text-slate-800">
                        {course.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                        Course ID: {course.id}
                    </p>

                </div>

                {/* Charges */}
                <div className="mt-6 space-y-4">

                    <div className="flex justify-between text-sm text-slate-600">
                        <span>Course Price</span>
                        <span>₹{coursePrice.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-sm text-slate-600">
                        <span>GST ({gstRate}%)</span>
                        <span>₹{gstAmount.toFixed(2)}</span>
                    </div>

                    <hr className="border-dashed border-slate-300" />

                    <div className="flex justify-between text-lg font-bold text-slate-900">
                        <span>Total Amount</span>
                        <span>₹{totalAmount.toFixed(2)}</span>
                    </div>

                </div>

                {/* Tax Notice */}
                <div className="mt-5 rounded-lg bg-amber-50 p-3 text-xs leading-5 text-amber-800">
                    Applicable GST/taxes are added to the course price.
                    Please review the total amount before proceeding.
                </div>

                {/* Confirm Payment */}
                <button
                    onClick={() => onConfirm(totalAmount)}
                    className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Proceed to Payment · ₹{totalAmount.toFixed(2)}
                </button>

                <button
                    onClick={onClose}
                    className="mt-3 w-full rounded-xl border border-slate-300 py-3 font-medium text-slate-600 hover:bg-slate-50"
                >
                    Cancel
                </button>

            </div>

        </div>
    );
};

export default CoursePaymentPopup;
