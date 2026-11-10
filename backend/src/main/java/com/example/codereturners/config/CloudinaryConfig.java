package com.example.codereturners.config;

import org.springframework.context.annotation.Configuration;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Configuration
public class CloudinaryConfig {

	public Cloudinary cloudinary() {
		
		return new Cloudinary(
				ObjectUtils.asMap(
					"cloud_name", System.getenv("xqip48gb"),
					"api_key", System.getenv("mediaflows_156af00d-8067-4556-85ca-e7ecd41fa452"),
					"api_secret", System.getenv("2vSwX8fL5Zb7gsb7Yb2JSTF8XoI")
						)
				);
	}
}
