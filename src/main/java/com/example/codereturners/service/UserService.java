package com.example.codereturners.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.codereturners.bean.User;
import com.example.codereturners.repository.UserRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
	
	@Autowired
	UserRepo repo;

	public User addUser(User user) {
		return repo.save(user);
	}
	
	public User findbyEmail(String email) {
		return repo.findByEmail(email);
	}
	
	public User findByPhone(String phone) {
		return repo.findByPhone(phone);
	}
	
	public boolean existsByEmail(String email) {
		return repo.existsByEmail(email);
	}
	
	public boolean existsByPhone(String phone) {
		return repo.existsByPhone(phone);
	}
}
