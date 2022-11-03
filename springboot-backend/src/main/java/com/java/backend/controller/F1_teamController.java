package com.java.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.backend.exception.ResourceNotFoundException;
import com.java.backend.model.F1_team;
import com.java.backend.repository.F1Repository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class F1_teamController {

	@Autowired
	private F1Repository f1Repository;
	
	//get all F1 teams
	@GetMapping("/F1_teams")
	public List<F1_team> getAllF1_teams(){
		return f1Repository.findAll();
	}
	
	//create new team
	@PostMapping("/F1_teams")
	public F1_team createTeam(@RequestBody F1_team team){
		System.out.println(team.getId() + team.getTeamName());
		return f1Repository.save(team);
	}
	
	//get team by id
	@GetMapping("/F1_teams/{id}")
	public ResponseEntity<F1_team> getTeamById(@PathVariable Long id){
		F1_team team = f1Repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("A csapat nem létezik!"));
		return ResponseEntity.ok(team);
	}
	
	//update team
	@PutMapping("/F1_teams/{id}")
	public ResponseEntity<F1_team> updateTeam(@PathVariable Long id, @RequestBody F1_team teamDetails){
		F1_team team = f1Repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("A csapat nem létezik!"));
		
		team.setTeamName(teamDetails.getTeamName());
		team.setYearOfEstablishment(teamDetails.getYearOfEstablishment());
		team.setNumOfWorldChampionships(teamDetails.getNumOfWorldChampionships());
		team.setEntryFreePaid(teamDetails.getEntryFreePaid());
		
		F1_team updatedTeam = f1Repository.save(team);
		return ResponseEntity.ok(updatedTeam);
	}
	
	//delete team
	@DeleteMapping("/F1_teams/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTeam(@PathVariable Long id){
		F1_team team = f1Repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("A csapat nem létezik!"));
		
		f1Repository.delete(team);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
