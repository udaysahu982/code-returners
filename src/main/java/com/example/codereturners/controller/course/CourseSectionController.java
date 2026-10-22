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
	
	@GetMapping("/openEditSection")
	public String openEditCourse(@RequestParam("id") int id, Model model) {
		
		model.addAttribute("section", serv.findById(id));
		System.out.println("open edit course controller");
		return "editSection";
	}
	
	@PostMapping("/editSection")
	public String editSection( @ModelAttribute CourseSection section) {
		
		int id =section.getId();

		System.out.println("the section is now updated-1....");
		
		serv.updateSection(section, id);
		System.out.println("the section is now updated");
		return "redirect:/openViewCourseI?id="+section.getCourseId();
		
	}
	
	@GetMapping("/deleteSection")
	public String deleteSection(@RequestParam("id") int id) {
		
		CourseSection section = serv.findById(id);
		
		serv.deleteSection(id);
		System.out.println("item deleted");
		return "redirect:/openViewCourseI?id="+section.getCourseId();
	}

}
