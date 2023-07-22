package com.product_community.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Object class of admin to store details of admin 
 * @author premgupta
 *
 */
@Entity
@Table(name = "productsAdmin")
public class Admin {
	
	@Id
	private int id;
	private String name;
	private String email;
	private String password;
	public Admin() {
		super();
	}
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getEmail() {
		return email;
	}
	public String getPassword() {
		return password;
	}
	
	
	

}
