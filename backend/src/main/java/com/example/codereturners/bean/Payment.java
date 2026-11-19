package com.example.codereturners.bean;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Customer and course
    private Long userId;
    private Long courseId;

    // Order details
    private String orderId;
    private String gatewayOrderId;
    private String gatewayPaymentId;

    // Amount details
    private BigDecimal coursePrice;
    private BigDecimal discountAmount;
    private BigDecimal taxableAmount;

    private BigDecimal gstRate;
    private BigDecimal cgstAmount;
    private BigDecimal sgstAmount;
    private BigDecimal igstAmount;

    private BigDecimal totalAmount;

    // Payment details
    private String paymentMethod;
    private String paymentStatus;

    private LocalDateTime paymentDate;

    private Boolean signatureVerified = false;

    // Refund details
    private String refundStatus;
    private BigDecimal refundAmount;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // Generate getters and setters
    
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(Long id, Long userId, Long courseId, String orderId, String gatewayOrderId, String gatewayPaymentId,
			BigDecimal coursePrice, BigDecimal discountAmount, BigDecimal taxableAmount, BigDecimal gstRate,
			BigDecimal cgstAmount, BigDecimal sgstAmount, BigDecimal igstAmount, BigDecimal totalAmount,
			String paymentMethod, String paymentStatus, LocalDateTime paymentDate, Boolean signatureVerified,
			String refundStatus, BigDecimal refundAmount, LocalDateTime createdAt, LocalDateTime updatedAt) {
		super();
		this.id = id;
		this.userId = userId;
		this.courseId = courseId;
		this.orderId = orderId;
		this.gatewayOrderId = gatewayOrderId;
		this.gatewayPaymentId = gatewayPaymentId;
		this.coursePrice = coursePrice;
		this.discountAmount = discountAmount;
		this.taxableAmount = taxableAmount;
		this.gstRate = gstRate;
		this.cgstAmount = cgstAmount;
		this.sgstAmount = sgstAmount;
		this.igstAmount = igstAmount;
		this.totalAmount = totalAmount;
		this.paymentMethod = paymentMethod;
		this.paymentStatus = paymentStatus;
		this.paymentDate = paymentDate;
		this.signatureVerified = signatureVerified;
		this.refundStatus = refundStatus;
		this.refundAmount = refundAmount;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getCourseId() {
		return courseId;
	}

	public void setCourseId(Long courseId) {
		this.courseId = courseId;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getGatewayOrderId() {
		return gatewayOrderId;
	}

	public void setGatewayOrderId(String gatewayOrderId) {
		this.gatewayOrderId = gatewayOrderId;
	}

	public String getGatewayPaymentId() {
		return gatewayPaymentId;
	}

	public void setGatewayPaymentId(String gatewayPaymentId) {
		this.gatewayPaymentId = gatewayPaymentId;
	}

	public BigDecimal getCoursePrice() {
		return coursePrice;
	}

	public void setCoursePrice(BigDecimal coursePrice) {
		this.coursePrice = coursePrice;
	}

	public BigDecimal getDiscountAmount() {
		return discountAmount;
	}

	public void setDiscountAmount(BigDecimal discountAmount) {
		this.discountAmount = discountAmount;
	}

	public BigDecimal getTaxableAmount() {
		return taxableAmount;
	}

	public void setTaxableAmount(BigDecimal taxableAmount) {
		this.taxableAmount = taxableAmount;
	}

	public BigDecimal getGstRate() {
		return gstRate;
	}

	public void setGstRate(BigDecimal gstRate) {
		this.gstRate = gstRate;
	}

	public BigDecimal getCgstAmount() {
		return cgstAmount;
	}

	public void setCgstAmount(BigDecimal cgstAmount) {
		this.cgstAmount = cgstAmount;
	}

	public BigDecimal getSgstAmount() {
		return sgstAmount;
	}

	public void setSgstAmount(BigDecimal sgstAmount) {
		this.sgstAmount = sgstAmount;
	}

	public BigDecimal getIgstAmount() {
		return igstAmount;
	}

	public void setIgstAmount(BigDecimal igstAmount) {
		this.igstAmount = igstAmount;
	}

	public BigDecimal getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(BigDecimal totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public LocalDateTime getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDateTime paymentDate) {
		this.paymentDate = paymentDate;
	}

	public Boolean getSignatureVerified() {
		return signatureVerified;
	}

	public void setSignatureVerified(Boolean signatureVerified) {
		this.signatureVerified = signatureVerified;
	}

	public String getRefundStatus() {
		return refundStatus;
	}

	public void setRefundStatus(String refundStatus) {
		this.refundStatus = refundStatus;
	}

	public BigDecimal getRefundAmount() {
		return refundAmount;
	}

	public void setRefundAmount(BigDecimal refundAmount) {
		this.refundAmount = refundAmount;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

    
    
}
