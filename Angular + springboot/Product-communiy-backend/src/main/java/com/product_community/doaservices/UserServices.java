package com.product_community.doaservices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product_community.entities.User;
import com.product_community.reprository.UserReprository;

/**
 * User service class to manage users into the database 
 * @author premgupta
 *
 */
@Service
public class UserServices {
	
	@Autowired
	private UserReprository userReprository;
	
	/**
	 * method to save new user into the database 
	 * @param user represents the object of user 
	 * @return returns the object of user 
	 */
	public User saveUser(final User user) {
		return this.userReprository.save(user);
	}
	
	/**
	 * method to find the object of user by its e-mail ID 
	 * @param email represents the e-mail ID of user 
	 * @return returns the object of user 
	 */
	public User findUser(final String email) {
		final List<User> users = this.userReprository.findByEmail(email);
		if(!users.isEmpty()) {
			System.out.println(users.get(0).getEmail());
			return users.get(0);
		}
		return null;
	}
	
	/**
	 * method to authenticate a user by its e-mail and password 
	 * @param email represents the e-mail of user 
	 * @param password repeating step password of user 
	 * @return returns the object of user 
	 */
	public User authenticateUser(final String email,final String password) {
		final User user = findUser(email);
		if(null!= user) {
			if(user.getPassword().equals(password)) {
				return user;
			}
		}
		return null;
	}
	/**
	 * Method to get the list of all users 
	 * @return return the list of all users 
	 */
	public List<User> getUsers(){
		return this.userReprository.findAll();
	}
}
