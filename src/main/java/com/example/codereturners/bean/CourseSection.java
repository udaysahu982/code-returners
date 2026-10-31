package com.example.codereturners.bean;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CourseSection {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int courseId;
	private String title;

	
	
	
	public CourseSection() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CourseSection(int id, int courseId, String title) {
		super();
		this.id = id;
		this.courseId = courseId;
		this.title = title;
	
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
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
