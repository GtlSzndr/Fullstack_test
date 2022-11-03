package com.java.backend.model;


import javax.persistence.Entity;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "users")

public class user {
	@Id
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;

	
	public user() {
		
	}
	
	public user(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
