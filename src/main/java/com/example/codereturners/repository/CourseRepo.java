package com.example.codereturners.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.codereturners.bean.Course;

@Repository
public interface CourseRepo extends JpaRepository<Course, Integer>  {

}
