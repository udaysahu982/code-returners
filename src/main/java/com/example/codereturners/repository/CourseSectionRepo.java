package com.example.codereturners.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.codereturners.bean.CourseSection;
import java.util.List;

@Repository
public interface CourseSectionRepo extends JpaRepository<CourseSection, Integer> {
	
	public  List<CourseSection> findByCourseId(int courseId);
	
	public void deleteAllByCourseId(int courseId);

}
