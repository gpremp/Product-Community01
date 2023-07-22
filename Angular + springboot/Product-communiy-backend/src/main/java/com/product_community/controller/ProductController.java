package com.product_community.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.product_community.doaservices.ProductServices;
import com.product_community.doaservices.ReviewServices;
import com.product_community.entities.User;
import com.product_community.entities.product.Product;
import com.product_community.entities.product.ProductReview;

/**
 * controller to manage HTTP request related to products 
 * @author premgupta
 *
 */
@RestController
@CrossOrigin("*")
public class ProductController {

	@Autowired
	private ProductServices productServices;
	
	@Autowired
	private ReviewServices reviewServices;
	
	/**
	 * Post HTTP request to save a new user into the database 
	 * @param user Represents the object of user 
	 * @return returns the object of closure 
	 */
	@PostMapping("/product")
	public Product addProduct(@RequestBody final Product product) {
		final Product newProduct = this.productServices.getProduct(product.getProductCode());
		if(newProduct==null) {
			return this.productServices.saveProduct(product);
		}
		return null;
	}
	
	/**
	 * Get HTTP request to get the product details by its ID 
	 * @param id Represents the id of product 
	 * @return returns turns the object of product 
	 */
	@GetMapping("/product/{id}")
	public Product getProduct(@PathVariable("id")final int id) {
		return this.productServices.getProduct(id);
	}
	
	/**
	 * Get HTTP request to get the list of products by its ID or name or brand 
	 * @param requestHTTP servlet request 
	 * @return returns the list of product 
	 */
	@GetMapping("/products")
	public List<Product> getproducts(HttpServletRequest request){
		final String code = request.getParameter("code");
		final String brand = request.getParameter("brand");
		final String name = request.getParameter("name");
		if((null!=code && !code.isBlank()) && !code.equals("null")) {
			Product product=this.productServices.getProduct(Integer.parseInt(code));
			if(null != product) {
				final List<Product> products = new ArrayList<>();
				products.add(product);
				return  products;
			}
		}else if (!brand.isBlank() && !name.isBlank()) {
			return this.productServices.getProductsbyNameAndBrand(name, brand);
		}else if (!brand.isBlank() && null!=brand) {
			return this.productServices.getProductsbyBrand(brand);
		}
		
		return this.productServices.getProductsbyName(name);
		
	}
	
	/**
	 * Get HTTP request to get review by its id
	 * @param id Represents the id of review 
	 * @return returns the object of review
	 */
	@GetMapping("/reviews/{id}")
	public List<ProductReview> getReviews(@PathVariable("id")final int id){
		return this.reviewServices.getReview(id);
	}
	
	/**
	 * HTTP post request to save new reviews 
	 * @param review Represents the review object review
	 * @return Returns the object of the review
	 */
	@PostMapping("/review")
	public ProductReview saveReview(@RequestBody final ProductReview review) {
		final Product product = this.productServices.getProduct(review.getProductCode());
		product.setNoOfReviews(product.getNoOfReviews()+1);
		product.setProductRating((review.getRating() + product.getProductRating()) / 2);
		this.productServices.saveProduct(product);
		return this.reviewServices.saveReview(review);
	}
	
	/**
	 * Get HTTP request to get the list of all products 
	 * @return returns the list of all products 
	 */
	@GetMapping("/admin/products")
	public List<Product> getAllProducts(){
		return this.productServices.getProducts();
	}
}
