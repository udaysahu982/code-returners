package com.example.codereturners.controller.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Home {

	@GetMapping("/home")
	public String openHomePage() {
		return "home";
	}
	
}
