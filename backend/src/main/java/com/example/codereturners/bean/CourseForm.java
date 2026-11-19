package com.example.codereturners.bean;

import org.springframework.web.multipart.MultipartFile;

public class CourseForm {

	private Long facultyId;
	private Long category_id;
	private String title;
	private String description;
	private String level;
	private double price;
	
	private MultipartFile image;

	public CourseForm() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CourseForm(Long facultyId, Long category_id, String title, String description, String level, double price,
			MultipartFile image) {
		super();
		this.facultyId = facultyId;
		this.category_id = category_id;
		this.title = title;
		this.description = description;
		this.level = level;
		this.price = price;
		this.image = image;
	}

	public Long getFacultyId() {
		return facultyId;
	}

	public void setFacultyId(Long facultyId) {
		this.facultyId = facultyId;
	}

	public Long getCategory_id() {
		return category_id;
	}

	public void setCategory_id(Long category_id) {
		this.category_id = category_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public MultipartFile getImage() {
		return image;
	}

	public void setImage(MultipartFile image) {
		this.image = image;
	}
	
	
}
