package com.example.codereturners.bean;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(
		 name = "course_enrollment",
		    uniqueConstraints = {
		        @UniqueConstraint(
		            columnNames = {"user_id", "course_id"}
		        )
		    }
		)
public class EnrolledCourses {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long courseId;
	private Long userId;
	private Long paymentId;
	private LocalDateTime enrollmentDate;
	private String enrollmentStatus;
	
	
	public EnrolledCourses() {
		super();
		// TODO Auto-generated constructor stub
	}


	public EnrolledCourses(Long id, Long courseId, Long userId, Long paymentId, LocalDateTime enrollmentDate,
			String enrollmentStatus) {
		super();
		this.id = id;
		this.courseId = courseId;
		this.userId = userId;
		this.paymentId = paymentId;
		this.enrollmentDate = enrollmentDate;
		this.enrollmentStatus = enrollmentStatus;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Long getCourseId() {
		return courseId;
	}


	public void setCourseId(Long courseId) {
		this.courseId = courseId;
	}


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public Long getPaymentId() {
		return paymentId;
	}


	public void setPaymentId(Long paymentId) {
		this.paymentId = paymentId;
	}


	public LocalDateTime getEnrollmentDate() {
		return enrollmentDate;
	}


	public void setEnrollmentDate(LocalDateTime enrollmentDate) {
		this.enrollmentDate = enrollmentDate;
	}


	public String getEnrollmentStatus() {
		return enrollmentStatus;
	}


	public void setEnrollmentStatus(String enrollmentStatus) {
		this.enrollmentStatus = enrollmentStatus;
	}

	
	
	
}
