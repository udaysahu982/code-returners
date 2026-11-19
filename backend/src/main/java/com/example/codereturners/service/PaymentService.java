package com.example.codereturners.service;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.codereturners.bean.Course;
import com.example.codereturners.repository.CourseRepo;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@Service
public class PaymentService {

    private final RazorpayClient razorpayClient;
    private final CourseRepo courseRepository;

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
        Long amount = (Long) Math.round(
                course.getPrice() * 100
        );

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

        return response;
    }
}