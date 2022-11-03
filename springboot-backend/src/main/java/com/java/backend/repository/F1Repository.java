package com.java.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.backend.model.F1_team;

@Repository
public interface F1Repository extends JpaRepository<F1_team, Long>{

}
