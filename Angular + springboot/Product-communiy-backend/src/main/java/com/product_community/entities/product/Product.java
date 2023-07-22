package com.product_community.entities.product;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Class to store the details of the product 
 * @author premgupta
 *
 */
@Entity
public class Product {
	
	@Id
	private int productCode;
	private String productName;
	private String productBrand;
	private double productRating;
	private int noOfReviews;
	private BigDecimal productPrice;
	public Product() {
		super();
	}
	public Product(final int productCode,final String productName,final String productBrand,final double productRating, int noOfReviews,
			final BigDecimal productPrice) {
		super();
		this.productCode = productCode;
		this.productName = productName;
		this.productBrand = productBrand;
		this.productRating = productRating;
		this.noOfReviews = noOfReviews;
		this.productPrice = productPrice;
	}
	public int getProductCode() {
		return productCode;
	}
	public String getProductName() {
		return productName;
	}
	public String getProductBrand() {
		return productBrand;
	}
	public double getProductRating() {
		return productRating;
	}
	public int getNoOfReviews() {
		return noOfReviews;
	}
	public BigDecimal getProductPrice() {
		return productPrice;
	}
	public void setNoOfReviews(final int noOfReviews) {
		this.noOfReviews = noOfReviews;
	}
	public void setProductRating(final double productRating) {
		this.productRating = productRating;
	}
	

}
