package com.product_community.entities;

/**
 * Class to store data like number of users, number of products, number of reviews 
 * @author premgupta
 *
 */
public class Stats {
	private int noOfUsers;
	private int noOfProducts;
	private int noOfreviews;
	public Stats(final int noOfUsers,final int noOfProducts,final int noOfreviews) {
		super();
		this.noOfUsers = noOfUsers;
		this.noOfProducts = noOfProducts;
		this.noOfreviews = noOfreviews;
	}
	public Stats() {
		super();
	}
	public int getNoOfUsers() {
		return noOfUsers;
	}
	public int getNoOfProducts() {
		return noOfProducts;
	}
	public int getNoOfreviews() {
		return noOfreviews;
	}
	
	
}
