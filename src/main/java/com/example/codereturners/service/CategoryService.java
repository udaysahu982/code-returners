package com.example.codereturners.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.codereturners.bean.Category;
import com.example.codereturners.repository.CategoryRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CategoryService {

	@Autowired
	CategoryRepo repo;
	
	public Category addCategory(Category category) { return repo.save(category);}
	
	  // Get all categories
    public List<Category> getAllCategories() {
        return repo.findAll();
    }
    
    // Get category by ID
    public Category getCategoryById(int id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found with ID: " + id));
    }
    
    // Update category
    public Category updateCategory(Category category) {
        Category existing = getCategoryById(category.getId());
        existing.setName(category.getName());

        return repo.save(existing);
    }

    // Delete category
    public void deleteCategory(int id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException(
                    "Category not found with ID: " + id);
        }

        repo.deleteById(id);
    }

	
	
}
