package com.product_community.controller;

import java.math.BigDecimal;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.product_community.doaservices.AdminServices;
import com.product_community.doaservices.ProductServices;
import com.product_community.doaservices.ReviewServices;
import com.product_community.doaservices.UserServices;
import com.product_community.entities.Admin;
import com.product_community.entities.Stats;
import com.product_community.entities.User;
import com.product_community.entities.product.Product;
import com.product_community.entities.product.ProductReview;

/**
 * Controller to manage HTTP request related to user 
 * @author premgupta
 *
 */
@RestController
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserServices userServices;
	
	@Autowired
	ProductServices productServices;
	
	@Autowired
	ReviewServices reviewServices;
	
	@Autowired
	AdminServices adminServices;
	
	/**
	 * Post HTTP request to save a new user into the database 
	 * @param user Represents the object of user 
	 * @return returns the object of closure 
	 */
	@PostMapping("/user")
	public String addUser(@RequestBody final User user) {
		final User newUser = this.userServices.findUser(user.getEmail());
		if(newUser==null) {
			this.userServices.saveUser(user);
			System.out.println("skfljskldf");
			return "success";
		}
		else {
			return "failed";
		}
	}
	
	/**
	 * Get HTTP request to authenticate a user 
	 * @param request represents the HTTP servlet request
	 * @return returns the object of user
	 */
	@GetMapping("/user")
	public User authenticateUser(HttpServletRequest request) {
		final String email = request.getParameter("email");
		final String password = request.getParameter("password");
		final User user = this.userServices.findUser(email);
		if(user!=null) {
			if(user.getPassword().equals(password)) {
				return user;
			}
		}
		return null;
	}
	
	/**
	 * Get HTTP request to authenticate admin 
	 * @param request represents the HTTP servlet request 
	 * @return returns the object of admin 
	 */
	@GetMapping("/admin")
	public Admin authenticateAdmin(HttpServletRequest request) {
		final String email = request.getParameter("email");
		final String password = request.getParameter("password");
		final Admin admin = this.adminServices.getAdmin(email);
		if(admin!=null) {
			if(admin.getPassword().equals(password)) {
				return admin;
			}
		}
		return null;
	}
	
	/**
	 * Get HTTP request to get the stats of number of users, number of reviews, number of products 
	 * @param request Represents the HTTP servlet request 
	 * @return returns object of stats which contain number of users, number of reviews, number of products 
	 */
	@GetMapping("/stats")
	public Stats getStats(HttpServletRequest request) {
		final int users = this.userServices.getUsers().size();
		final int products = this.productServices.getProducts().size();
		final int reviews = this.reviewServices.getReviews().size();
		final Stats stats = new Stats(users,products,reviews);
		return stats;
	}
	
}
