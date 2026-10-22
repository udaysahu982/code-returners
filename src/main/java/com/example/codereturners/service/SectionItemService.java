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
	
	public SectionItem addSectionItem(SectionItem item) {
		return repo.save(item);
	}
	
	public List<SectionItem> findItemsByCourseAndSectionId(int CourseId, int sectionId){
		
		return repo.findAllByCourseIdAndSectionId(CourseId, sectionId);
	}

}
