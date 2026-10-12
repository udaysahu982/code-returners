package com.example.codereturners.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.codereturners.bean.Course;

public interface CourseRepo extends JpaRepository<Course, Integer>  {

}
