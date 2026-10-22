package com.example.codereturners.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.codereturners.bean.SectionItem;

@Repository
public interface SectionItemRepo extends JpaRepository<SectionItem, Integer> {
	
	public List<SectionItem> findAllByCourseIdAndSectionId(int courseId, int sectionId);

}
