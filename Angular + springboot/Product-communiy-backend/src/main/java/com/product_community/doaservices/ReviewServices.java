package com.product_community.doaservices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product_community.entities.product.ProductReview;
import com.product_community.reprository.ReviewReprository;
/**
 * Service class of review to manage refuse into the database 
 * @author premgupta
 *
 */
@Service
public class ReviewServices {
	
	@Autowired
	private ReviewReprository reviewReprository; 
	
	/**
	 * method to save new review into the database 
	 * @param review represents the object of review 
	 * @return return the object of review 
	 */
	public ProductReview saveReview(final ProductReview review) {
		return this.reviewReprository.save(review);
	}
	
	/**
	 * method to get the review object by its ID 
	 * @param ProductId represents the product id of review 
	 * @return returns the object of review 
	 */
	public List<ProductReview> getReview(final int ProductId) {
		return this.reviewReprository.findByProductCode(ProductId);
	}
	
	/**
	 * method to get list of all reviews 
	 * @return returns the list of reviews 
	 */
	public List<ProductReview> getReviews(){
		return this.reviewReprository.findAll();
	}
}
