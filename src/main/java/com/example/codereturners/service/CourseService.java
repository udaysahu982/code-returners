package com.example.codereturners.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.codereturners.bean.Course;
import com.example.codereturners.repository.CourseRepo;

@Service
public class CourseService {
	
	@Autowired
	CourseRepo repo;
	
	public Course addCourse(Course course) {
		course.setCreationDate(LocalDateTime.now());
		return repo.save(course);
	}
	
	public List<Course> viewAllCourses(){
		
		return repo.findAll();
	}
	
	public Course findCourseById(int id) {
		
		Course course =repo.findById(id)
				.orElseThrow(() -> new RuntimeException("Course not found"));
		
		return course;
	}
	
	public void deleteCourse(int id) {
		repo.deleteById(id);
	}
	
	public Course updateCourse(Course course, int id) {
		
		course.setCreationDate(LocalDateTime.now());
		course.setId(id);
		return repo.save(course);
	}
	


}
