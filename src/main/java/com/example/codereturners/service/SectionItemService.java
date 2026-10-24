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
	
	
	public SectionItem findById(int id) {
		return repo.findById(id).orElseThrow(()-> new RuntimeException("Item not found"));
	}
	
	public SectionItem addSectionItem(SectionItem item) {
		return repo.save(item);
	}
	
	public List<SectionItem> findItemsByCourseAndSectionId(int CourseId, int sectionId){
		
		return repo.findAllByCourseIdAndSectionId(CourseId, sectionId);
	}

	public SectionItem updateSectionItem(SectionItem item, int id) {
		
			item.setId(id);
		return repo.save(item); 
	}
	
	public void deleteSectionItem(int id) {
		repo.deleteById(id);
	}
	
	public void deleteSectionItemBySectionId(int sectionId) {
		repo.deleteAllBySectionId(sectionId);
	}
}
