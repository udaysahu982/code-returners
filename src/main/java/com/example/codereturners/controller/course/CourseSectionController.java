package com.example.codereturners.controller.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.codereturners.bean.CourseSection;
import com.example.codereturners.service.CourseSectionService;


@Controller
public class CourseSectionController {
	
	@Autowired
	CourseSectionService serv;
	
	@GetMapping("/openAddSection")
	public String openAddCourseSection(@RequestParam("id") int id, Model model) {
		System.out.println("Add Section is opened" + id);
		model.addAttribute("id",id);
		return "addSection";
	}
	
	@PostMapping("/addSection")
	public String addCourseSection(@ModelAttribute CourseSection section) {
	
		System.out.println("inside addSection " + section.toString());
		serv.addCourseSection(section);
		
		return "redirect:/openViewCourseI?id="+section.getCourseId();
	
		
	}

}
