package com.java.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.backend.model.user;

@Repository
public interface userRepository extends JpaRepository<user, String>{

	user findByUsername(String username);


}
