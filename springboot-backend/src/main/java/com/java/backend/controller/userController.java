package com.java.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.backend.model.user;
import com.java.backend.repository.userRepository;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class userController {
	
	@Autowired
	private userRepository userRepository;
	
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/login")
	public ResponseEntity<Object> loginUser(@RequestBody user userData) {
		user user = userRepository.findByUsername(userData.getUsername());
		passwordEncoder = new BCryptPasswordEncoder();
		
		if(passwordEncoder.matches(userData.getPassword(), user.getPassword())) {
			return ResponseEntity.ok(user);
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	}
	
}
