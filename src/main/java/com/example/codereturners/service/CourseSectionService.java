package com.example.codereturners.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.codereturners.bean.CourseSection;
import com.example.codereturners.repository.CourseSectionRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CourseSectionService {

	@Autowired
	CourseSectionRepo repo;
	
	public CourseSection findById(int id) {
		return repo.findById(id)
				.orElseThrow(()-> new RuntimeException("Section not found"));
	}
	
	public List<CourseSection> findByCourseId(int id) {
		
		return repo.findByCourseId(id);
	}
	
	public CourseSection addCourseSection(CourseSection section) {
		return repo.save(section);
	}
	
	public CourseSection updateSection(CourseSection section, int id) {
		section.setId(id);
		return repo.save(section);
	}
	
	public void deleteSection(int id) {
		repo.deleteById(id);
	}
}
