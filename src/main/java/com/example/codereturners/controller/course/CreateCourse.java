package com.example.codereturners.controller.course;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.codereturners.bean.Course;

@Controller
public class CreateCourse {
	
	@GetMapping("/openCreateCourse")
	public String openCreateCourse() {
		return "createCourse";
	}
	
	@PostMapping("/createCourse")
	public String createCourse(@ModelAttribute Course course) {
		
		
		
	}

}
