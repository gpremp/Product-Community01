package com.product_community.entities.product;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Class to store the review related to a product 
 * @author premgupta
 *
 */
@Entity
public class ProductReview {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;   //Represents the id of review 
	private String review; //Represents the review related to a product  
	private int rating;   //  the rating of a product 
	private int productCode;  //  product code of the product 
	private String approve;   //  store details of approved or not approved review 
	public ProductReview() {
		super();
	}
	public ProductReview(final String review,final int rating,final int productCode,final String approve) {
		super();
		this.review = review;
		this.rating = rating;
		this.productCode = productCode;
		this.approve = approve;
	}
	public int getId() {
		return id;
	}
	public String getReview() {
		return review;
	}
	public int getRating() {
		return rating;
	}
	public int getProductCode() {
		return productCode;
	}
	public String getApprove() {
		return approve;
	}
	
	

}
