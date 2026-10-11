package com.example.codereturners.controller.course;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CreateCourse {
	
	@GetMapping("/openCreateCourse")
	public String openCreateCourse() {
		return "createCourse";
	}

}
