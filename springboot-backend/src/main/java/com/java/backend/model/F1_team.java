package com.java.backend.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "F1_teams")


public class F1_team {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "teamName")
	private String teamName;
	
	@Column(name = "yearOfEstablishment")
	private int yearOfEstablishment;
	
	@Column(name = "numOfWorldChampionships")
	private int numOfWorldChampionships;
	
	@Column(name = "entryFreePaid")
	private int entryFreePaid;
	
	public F1_team() {
		
	}
	
	public F1_team(String teamName, int yearOfEstablishment, int numOfWorldChampionships, int entryFreePaid) {
		super();
		this.teamName = teamName;
		this.yearOfEstablishment = yearOfEstablishment;
		this.numOfWorldChampionships = numOfWorldChampionships;
		this.entryFreePaid = entryFreePaid;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTeamName() {
		return teamName;
	}
	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
	public int getYearOfEstablishment() {
		return yearOfEstablishment;
	}
	public void setYearOfEstablishment(int yearOfEstablishment) {
		this.yearOfEstablishment = yearOfEstablishment;
	}
	public int getNumOfWorldChampionships() {
		return numOfWorldChampionships;
	}
	public void setNumOfWorldChampionships(int numOfWorldChampionships) {
		this.numOfWorldChampionships = numOfWorldChampionships;
	}
	public int getEntryFreePaid() {
		return entryFreePaid;
	}
	public void setEntryFreePaid(int entryFreePaid) {
		this.entryFreePaid = entryFreePaid;
	}
}
