package com.example.codereturners.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.codereturners.bean.SectionItem;

@Repository
public interface SectionItemRepo extends JpaRepository<SectionItem, Long> {
	
	public List<SectionItem> findAllByCourseIdAndSectionId(Long courseId, Long sectionId);
	
	public void deleteAllBySectionId(Long sectionId);
	
	public void deleteAllByCourseId(Long courseId);

}
