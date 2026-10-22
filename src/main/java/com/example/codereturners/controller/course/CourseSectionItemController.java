package com.example.codereturners.controller.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.codereturners.service.SectionItemService;

@Controller
public class CourseSectionItemController {
	
	@Autowired
	SectionItemService serv;

	@GetMapping("/openViewSectionItems")
	public String openViewSectionItem(@RequestParam("courseId") int courseId, @RequestParam("sectionId") int sectionId, Model model) {
		
		System.out.println("section item controller is working ....");
		model.addAttribute("items", serv.findItemsByCourseAndSectionId(courseId, sectionId));
		
		System.out.println("the items is fetched " + serv.findItemsByCourseAndSectionId(courseId, sectionId).toString());
		return "viewSectionItems";
	}
}
