package com.example.codereturners.controller.course;

import java.io.IOException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.codereturners.bean.SectionItem;
import com.example.codereturners.service.SectionItemService;

@Controller
public class CourseSectionItemController {
	
	@Autowired
	SectionItemService serv;

	@GetMapping("/openViewSectionItems")
	public String openViewSectionItem(@RequestParam("courseId") int courseId, @RequestParam("sectionId") int sectionId, Model model) {
		
		System.out.println("section item controller is working ....");
		model.addAttribute("items", serv.findItemsByCourseAndSectionId(courseId, sectionId));
		model.addAttribute("courseId", courseId);
		model.addAttribute("sectionId", sectionId);
		
		System.out.println("the items is fetched " + serv.findItemsByCourseAndSectionId(courseId, sectionId).toString());
		return "viewSectionItems";
	}
	
	@RequestMapping("/openAddSectionItem")
	public String openAddSectionItem(@RequestParam("courseId") int courseId, @RequestParam("sectionId") int sectionId, Model model) {
		
		model.addAttribute("courseId", courseId);
		model.addAttribute("sectionId", sectionId);
		model.addAttribute("item", new SectionItem());
		return "addSectionItem";
	}
	
	@PostMapping("/addSectionItem")
	public String addSectionItem(@ModelAttribute("item") SectionItem item, @RequestParam(value = "uploadedFile", required = false)
    MultipartFile uploadedFile) throws IOException {
		
		 if (uploadedFile != null && !uploadedFile.isEmpty()) {
		        item.setFile(uploadedFile.getBytes());
		    }
		
		System.out.println("add Section item opened");
		serv.addSectionItem(item);
		System.out.println("item added successfully");
		return "redirect:/openViewSectionItems?courseId="+item.getCourseId()+"&sectionId="+item.getSectionId();
	}
	
	@GetMapping("/openEditSectionItem")
	public String openEditSectionItem(@RequestParam int id, Model model) {
		
		System.out.println("Edit Section item opened");
		
		model.addAttribute("item", serv.findById(id));
		System.out.println("item fetched" + serv.findById(id).toString());
		return "editSectionItem";
	}
	
	@PostMapping("/editSectionItem")
	public String editSectionItem(@ModelAttribute SectionItem item, @RequestParam("id") int id, @RequestParam(value = "uploadedFile", required = false)
    MultipartFile uploadedFile) throws IOException {
		
		System.out.println("the item is now updating ");
		
		 if (uploadedFile != null && !uploadedFile.isEmpty()) {
		        item.setFile(uploadedFile.getBytes());
		    }
		
		serv.updateSectionItem(item, id);
		
		System.out.println("item updated success");
		return "redirect:/openViewSectionItems?courseId="+item.getCourseId()+"&sectionId="+item.getSectionId();
	}
	
	
	@GetMapping("/viewSectionItemFile")
	public ResponseEntity<byte[]> viewSectionItemFile(@RequestParam int id) {

		System.out.println("file view is opened");
		
	    SectionItem item = serv.findById(id); // Get item from service

	    if (item == null || item.getFile() == null
	            || item.getFile().length == 0) {
	        return ResponseEntity.notFound().build();
	    }

	    return ResponseEntity.ok()
	            .contentType(MediaType.APPLICATION_PDF)
	            .header(HttpHeaders.CONTENT_DISPOSITION,
	                    "inline; filename=\"section-item-" + id + ".pdf\"")
	            .body(item.getFile());
	}
	
	@GetMapping("/deleteSectionItem")
	public String deleteSectionItem(@RequestParam("id") int id) {
		
		SectionItem item=serv.findById(id);
		serv.deleteSectionItem(id);
		
		return "redirect:/openViewSectionItems?courseId="+item.getCourseId()+"&sectionId="+item.getSectionId();
	}
	
}
