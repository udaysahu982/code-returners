package com.example.codereturners.controller.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.codereturners.service.CourseSectionService;
import com.example.codereturners.service.CourseService;

@Controller
public class PublishedCourse {
	
	@Autowired
	CourseSectionService serv;
	
	@Autowired
	CourseService courseServ;
	
	@GetMapping("/openViewPublishedCourses")
	public String openPublishedCourses(Model model) {
		
		model.addAttribute("courses",courseServ.viewAllCourses());
				
		return "viewPublishedCourses";
	}
	
	@GetMapping("/openViewCourseI")
	public String viewCourse(@RequestParam("id") int id, Model model) {
		
		System.out.println("inside viewCourseI");
		model.addAttribute("courseSections", serv.findByCourseId(id));
		model.addAttribute("courseId", id);
		System.out.println(serv.findByCourseId(id).toString());
		
		return "viewCourseI";
	}
	
}
