package com.example.codereturners.controller.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.codereturners.bean.Course;
import com.example.codereturners.service.CourseService;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:5173")
public class ViewCourses {
	
	@Autowired
	CourseService courseService;
	
	@GetMapping("/viewAllCourses")
	public ResponseEntity<List<Course>> viewAllCourses(){
		
		List<Course> courses = courseService.viewAllCourses();
		System.out.println(courses.toString());
		
		return ResponseEntity.ok(courses);	}
	
	
	@GetMapping("/openCreateCourse")
	public String openCreateCourse() {
		return "createCourse";
	}
	
	@PostMapping("/createCourse")
	public String createCourse(@ModelAttribute Course course) {
		
		courseService.addCourse(course);
		
		return "redirect:/openHome";
	}
	
	
	
	
}
