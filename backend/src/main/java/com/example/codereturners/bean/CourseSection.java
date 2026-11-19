package com.example.codereturners.bean;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CourseSection {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long courseId;
	private String title;

	
	
	
	public CourseSection() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CourseSection(Long id, Long courseId, String title) {
		super();
		this.id = id;
		this.courseId = courseId;
		this.title = title;
	
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
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	
	@Override
	public String toString() {
		return "CourseSection [id=" + id + ", courseId=" + courseId + ", title=" + title + ", sectionItemId="
				+ "]";
	}
	
	
	
}
