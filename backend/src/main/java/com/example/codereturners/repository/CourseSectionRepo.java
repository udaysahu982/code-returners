package com.example.codereturners.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.codereturners.bean.CourseSection;
import java.util.List;

@Repository
public interface CourseSectionRepo extends JpaRepository<CourseSection, Long> {
	
	public  List<CourseSection> findByCourseId(Long courseId);
	
	public void deleteAllByCourseId(Long courseId);

}
