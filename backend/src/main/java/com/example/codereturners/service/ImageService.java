package com.example.codereturners.service;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Service
public class ImageService {
	
	@Autowired
	public Cloudinary cloudinary;
	
	public String uploadImage(MultipartFile file) throws IOException {
		Map<?, ?> uploadResult = cloudinary.uploader().upload(
				file.getBytes(),
				ObjectUtils.emptyMap()
				);
		String imageUrl = (String) uploadResult.get("secure_url");
		return imageUrl;
	}

}
