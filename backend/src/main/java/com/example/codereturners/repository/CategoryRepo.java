package com.example.codereturners.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.codereturners.bean.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {

}
