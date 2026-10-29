package com.example.codereturners.controller.auth;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.codereturners.bean.LoginRequest;
import com.example.codereturners.bean.Role;
import com.example.codereturners.bean.User;
import com.example.codereturners.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
	
	@Autowired
	UserService serv;
	
	@PostMapping("/signup")
	public ResponseEntity<?> studentRegister(@RequestBody User user) {
	
		if(serv.existsByEmail(user.getEmail())) {
			 return ResponseEntity
					 .status(HttpStatus.CONFLICT)
					 .body("Email already registered");
		}
		System.out.println("The controller student signup is called");
		user.setRegDate(LocalDateTime.now());
		user.setRole(Role.ROLE_STUDENT);
		
		serv.addUser(user);
		
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body("signup successful");
		
	}
	
	public ResponseEntity<?> studentLogin(@RequestBody LoginRequest request){
	
		String identifier = request.getIdentifier();
		String password = request.getPassword();
		
		User user;
		
		if (serv.existsByEmail(identifier) ) {
			
			user = serv.findbyEmail(identifier);
		}
		else if(serv.existsByPhone(identifier)) {
			user = serv.findByPhone(identifier);
		}
	}
	

	
}
