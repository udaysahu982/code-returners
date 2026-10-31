package com.example.codereturners.controller.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;


import com.example.codereturners.bean.Course;
import com.example.codereturners.service.CourseService;

@Controller
public class CourseHome {
	
	@Autowired
	CourseService courseService;
	
	@GetMapping("/openHome")
	public String openCourseHome() {
		return "home";
	}
	
	@GetMapping("/openCreateCourse")
	public String openCreateCourse() {
		return "createCourse";
	}
	
	@PostMapping("/createCourse")
	public String createCourse(@ModelAttribute Course course) {
		
		courseService.addCourse(course);
		
		return "redirect:/openHome";
	}
	
	@GetMapping("/viewAllCourses")
	public String viewAllCourses(Model model) {
		
		model.addAttribute("courses", courseService.viewAllCourses());
		
		return "viewCourses";
	}
	
	
}
