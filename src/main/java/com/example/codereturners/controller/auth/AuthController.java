package com.example.codereturners.controller.auth;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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
	
	@PostMapping("/login")
	public ResponseEntity<?> studentLogin(@RequestBody LoginRequest request){
	
		String identifier = request.getIdentifier();
		String password = request.getPassword();
		
		if(!serv.existsByEmailOrPhone(identifier, identifier) ) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Invalid Credentials");
		}
		
		User user=serv.findByEmailOrPhone(identifier, identifier);
		
		if(!password.equals(user.getPass())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Invalid Credentials");
		}
		
		Map<String, Object> response = new HashMap<>();
		response.put("message", "login success");
		response.put("id", user.getId());
		response.put("name", user.getName());
		response.put("email", user.getEmail());
		response.put("name", user.getPhone());
		response.put("role", user.getRole());
		
		return ResponseEntity.ok(response);		
		
	}
	

	
}
