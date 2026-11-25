package com.example.codereturners.service;

import java.math.BigDecimal;
import java.math.RoundingMode;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.codereturners.bean.Course;
import com.example.codereturners.bean.PriceBreakdown;
import com.example.codereturners.repository.CourseRepo;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@Service
public class PaymentService {

    private final RazorpayClient razorpayClient;
    private final CourseRepo courseRepository;
    
    private static final BigDecimal GST_RATE = new BigDecimal("18");
    private static final BigDecimal HUNDRED = new BigDecimal("100");

    @Value("${razorpay.key.id}")
    private String keyId;

    public PaymentService(
            RazorpayClient razorpayClient,
            CourseRepo courseRepository) {

        this.razorpayClient = razorpayClient;
        this.courseRepository = courseRepository;
    }

    public JSONObject createOrder(Long courseId) throws Exception {

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() ->
                    new RuntimeException("Course not found"));

        // Assuming course.getPrice() returns rupees.  getPrice().doubleValue() * 100
        PriceBreakdown price = calculatePrice(course);

        Long amount = price.totalAmount()
                .multiply(HUNDRED)
                .longValueExact();

        if (amount <= 0) {
            throw new RuntimeException("Invalid course price");
        }

        JSONObject orderRequest = new JSONObject();

        orderRequest.put("amount", amount);
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "course_" + courseId);

        Order order = razorpayClient.orders.create(orderRequest);

        JSONObject response = new JSONObject();

        response.put("orderId", order.get("id").toString());
        response.put("amount", amount);
        response.put("currency", "INR");
        response.put("key", keyId);
        response.put("courseTitle", course.getTitle());
        System.out.println("the order is created");

        return response;
    }
    
    private PriceBreakdown calculatePrice(Course course) {

        BigDecimal price = BigDecimal.valueOf(course.getPrice())
                .setScale(2, RoundingMode.HALF_UP);

        BigDecimal discount = BigDecimal.ZERO.setScale(2); // coupons can go here later
        BigDecimal taxable = price.subtract(discount);

        if (taxable.signum() <= 0) {
            throw new RuntimeException("Invalid course price");
        }

        BigDecimal gst = taxable.multiply(GST_RATE)
                .divide(HUNDRED, 2, RoundingMode.HALF_UP);

        // Same-state sale: split GST equally into CGST and SGST
        BigDecimal cgst = gst.divide(new BigDecimal("2"), 2, RoundingMode.HALF_UP);
        BigDecimal sgst = gst.subtract(cgst);
        BigDecimal igst = BigDecimal.ZERO.setScale(2);

        BigDecimal total = taxable.add(gst);

        return new PriceBreakdown(price, discount, taxable, GST_RATE, cgst, sgst, igst, total);
    }
    
    
    
    
    public PriceBreakdown getPriceSummary(Long courseId) {

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        return calculatePrice(course);
    }
}