package com.example.codereturners.controller.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.codereturners.bean.Category;
import com.example.codereturners.service.CategoryService;

@Controller
public class CategoryController {
	
	@Autowired
	CategoryService serv;

	@GetMapping("/openAddCategory")
	public String openAddCategory() {
		System.out.println("add category open");
		return "addCategory";
	}
	
	@PostMapping("/addCategory")
	public String addCategory(@ModelAttribute Category category) {
		
		System.out.println("Category added");
		serv.addCategory(category);
		return "redirect/viewAllCategory";
	}
	
	@GetMapping("/viewAllCategory")
	public String viewCategories(Model model) {
		System.out.println("view All Categories");
	        model.addAttribute("categories", serv.getAllCategories());
	        return "viewAllCategories";
	    }
	
	  // Open edit page
    @GetMapping("/openEditCategory")
    public String openEditCategory(@RequestParam int id, Model model) {

        model.addAttribute("category", serv.getCategoryById(id));
        return "editCategory";
    }

    // Update category
    @PostMapping("/updateCategory")
    public String updateCategory(@ModelAttribute Category category) {

        serv.updateCategory(category);
        return "redirect:/viewAllCategory";
    }

    // Delete category
    @GetMapping("/deleteCategory")
    public String deleteCategory(@RequestParam int id) {
        serv.deleteCategory(id);
        return "redirect:/viewAllCategory";
    }
	
}
