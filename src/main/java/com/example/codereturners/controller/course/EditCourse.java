package com.example.codereturners.controller.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.codereturners.service.CourseService;

@Controller
public class EditCourse {
	
	@Autowired
	CourseService serv;
	
	@GetMapping("/editCourse")
	public String editCourse(@RequestParam("id") int id, Model model) {
		
		model.addAttribute("course", serv.findCourseById(id));
		
		return "editCourse";
		
	}

}
