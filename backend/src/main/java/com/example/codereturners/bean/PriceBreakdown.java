package com.example.codereturners.bean;

import java.math.BigDecimal;

public record PriceBreakdown(
        BigDecimal coursePrice,
        BigDecimal discountAmount,
        BigDecimal taxableAmount,
        BigDecimal gstRate,
        BigDecimal cgstAmount,
        BigDecimal sgstAmount,
        BigDecimal igstAmount,
        BigDecimal totalAmount) {
}