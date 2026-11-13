package com.example.codereturners.controller.course;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.cloudinary.Cloudinary;
import com.example.codereturners.bean.Course;
import com.example.codereturners.bean.CourseForm;
import com.example.codereturners.service.CourseSectionService;
import com.example.codereturners.service.CourseService;
import com.example.codereturners.service.ImageService;
import com.example.codereturners.service.SectionItemService;

@RestController
@RequestMapping("/api/course")
@CrossOrigin(origins = "http://localhost:5173")
public class CourseOperations {

	@Autowired
    public final Cloudinary cloudinary;
	
	@Autowired
	CourseService serv;
	@Autowired
	CourseSectionService csServ;
	@Autowired
	SectionItemService siServ;
	@Autowired
	ImageService imgServ;

    CourseOperations(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }
	
	@PostMapping(
			value = "/createcourse",
	        consumes = MediaType.MULTIPART_FORM_DATA_VALUE
	        )
	public ResponseEntity<String> createCourse(@ModelAttribute CourseForm courseForm) throws IOException {
		
		System.out.println("Create course is called");
		MultipartFile image = courseForm.getImage();
		
		String imageUrl = imgServ.uploadImage(image);
		
		Course course = new Course();
		
		course.setFacultyId(courseForm.getFacultyId());
		course.setCategory_id(courseForm.getCategory_id());
	    course.setTitle(courseForm.getTitle());
	    course.setDescription(courseForm.getDescription());
	    course.setLevel(courseForm.getLevel());
	    course.setPrice(courseForm.getPrice());
	    
	    course.setImageUrl(imageUrl);
		
		 serv.addCourse(course);
		
		return ResponseEntity.status(HttpStatus.CREATED).body("Course Successfully Created");
	}
	
	
	@GetMapping("/openEditCourse")
	public String openEditCourse(@RequestParam("id") int id, Model model) {
		
		System.out.println("Edit course is been called and data is ");
		
		model.addAttribute("course", serv.findCourseById(id));
		
		System.out.println(serv.findCourseById(id));
		
		return "editCourse";
		
	}
	
	@PostMapping("/editCourse/{id}")
	public String editCourse(@ModelAttribute Course course, @PathVariable int id) {
		
		System.out.println("the new data is before update " + course.toString());
		
		 serv.updateCourse(course, id);
		 
		 return "redirect:/openHome";
	}
	
	@RequestMapping("/deleteCourse")
	public String deleteCourse(int id) {
		
		serv.deleteCourse(id);
		csServ.deleteAllSectionByCourseId(id);
		siServ.deleteAllSectionItemByCourseId(id);
		
		return "redirect:/viewAllCourses";
	}

}
