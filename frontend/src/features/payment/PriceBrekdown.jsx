import React from 'react';

export const formatINR = (value) =>
    `₹${Number(value || 0).toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;

const Row = ({ label, value, className = '' }) => (
    <div className={`flex justify-between text-sm text-slate-600 ${className}`}>
        <span>{label}</span>
        <span>{value}</span>
    </div>
);

const PriceBreakdown = ({ price }) => {
    const hasDiscount = Number(price.discountAmount) > 0;
    const hasIgst = Number(price.igstAmount) > 0;
    const halfRate = Number(price.gstRate) / 2;

    return (
        <div className="mt-5 space-y-2">
            <Row label="Course price" value={formatINR(price.coursePrice)} />

            {hasDiscount && (
                <Row
                    label="Discount"
                    value={`- ${formatINR(price.discountAmount)}`}
                    className="text-green-600"
                />
            )}

            <Row label="Taxable amount" value={formatINR(price.taxableAmount)} />

            {hasIgst ? (
                <Row label={`IGST (${price.gstRate}%)`} value={formatINR(price.igstAmount)} />
            ) : (
                <>
                    <Row label={`CGST (${halfRate}%)`} value={formatINR(price.cgstAmount)} />
                    <Row label={`SGST (${halfRate}%)`} value={formatINR(price.sgstAmount)} />
                </>
            )}

            <hr className="border-slate-200" />

            <div className="flex justify-between text-lg font-bold text-slate-800">
                <span>Total</span>
                <span>{formatINR(price.totalAmount)}</span>
            </div>
        </div>
    );
};

export default PriceBreakdown;