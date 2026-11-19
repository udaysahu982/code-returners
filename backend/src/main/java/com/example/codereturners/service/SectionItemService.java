package com.example.codereturners.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.codereturners.bean.SectionItem;
import com.example.codereturners.repository.SectionItemRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class SectionItemService {
	
	@Autowired
	SectionItemRepo repo;
	
	
	public SectionItem findById(Long id) {
		return repo.findById(id).orElseThrow(()-> new RuntimeException("Item not found"));
	}
	
	public SectionItem addSectionItem(SectionItem item) {
		return repo.save(item);
	}
	
	public List<SectionItem> findItemsByCourseAndSectionId(Long CourseId, Long sectionId){
		
		return repo.findAllByCourseIdAndSectionId(CourseId, sectionId);
	}

	public SectionItem updateSectionItem(SectionItem item, Long id) {
		
			item.setId(id);
		return repo.save(item); 
	}
	
	public void deleteSectionItem(Long id) {
		repo.deleteById(id);
	}
	
	public void deleteAllSectionItemBySectionId(Long sectionId) {
		repo.deleteAllBySectionId(sectionId);
	}
	
	public void deleteAllSectionItemByCourseId(Long courseId) {
		repo.deleteAllByCourseId(courseId);
	}
}
