package com.example.codereturners.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.codereturners.bean.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

	public User findByEmail(String email);
	
	public User findByPhone(String phone);
	
	public boolean existsByEmail(String email);
	
	public boolean existsByPhone(String phone);

}
