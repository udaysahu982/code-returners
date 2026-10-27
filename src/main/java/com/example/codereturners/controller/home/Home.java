package com.example.codereturners.controller.home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Home {

	@GetMapping("/home")
	public String openHomePage() {
		return "home";
	}
	
}
