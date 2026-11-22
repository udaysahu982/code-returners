package com.example.codereturners.controller.Payment;


import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.codereturners.bean.CreateOrderRequest;
import com.example.codereturners.service.PaymentService;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/createorder")
    public ResponseEntity<?> createOrder(
            @RequestBody CreateOrderRequest request) {
    	System.out.println("The payment controller is called");

        try {
            JSONObject order = paymentService.createOrder(request.getCourseId());

            return ResponseEntity.ok(order.toMap());

        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(e.getMessage());
        }
    }
}
