package com.example.codereturners.bean;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long facultyId;
	private Long category_id;
	private String title;
	private String description;
	private String level;
	private double price;
	private LocalDateTime creationDate;
	private String imageUrl;
	
	
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Course(Long id, Long facultyId, Long category_id, String title, String description, String level, double price,
			LocalDateTime creationDate, String imageUrl) {
		super();
		this.id = id;
		this.facultyId = facultyId;
		this.category_id = category_id;
		this.title = title;
		this.description = description;
		this.level = level;
		this.price = price;
		this.creationDate = creationDate;
		this.imageUrl = imageUrl;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
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


	public LocalDateTime getCreationDate() {
		return creationDate;
	}


	public void setCreationDate(LocalDateTime creationDate) {
		this.creationDate = creationDate;
	}


	public String getImageUrl() {
		return imageUrl;
	}


	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}


	@Override
	public String toString() {
		return "Course [id=" + id + ", facultyId=" + facultyId + ", category_id=" + category_id + ", title=" + title
				+ ", description=" + description + ", level=" + level + ", price=" + price + ", creationDate="
				+ creationDate + ", imageUrl=" + imageUrl + "]";
	}


	
	
	
}
