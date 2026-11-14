package com.example.codereturners.controller.course;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
		
		return ResponseEntity.ok(courses);	
		}
	
	@PostMapping("/createdCourses")
	public ResponseEntity<?> viewCreatedCourse(@RequestBody Map<String, Integer> req){
		
		Integer facultyId = req.get("facultyId");
		
		if(facultyId == null || facultyId == 0) {
			return ResponseEntity.badRequest().body("Invalid faculty id");	
			}
				
		List<Course> allCreatedCourses = courseService.findByFacultyId(facultyId);
		
		if(allCreatedCourses.isEmpty() || allCreatedCourses == null) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Course not available... unable to find courses");
		}
		return ResponseEntity.ok(allCreatedCourses);
		
	}
	
	
	
	
}
