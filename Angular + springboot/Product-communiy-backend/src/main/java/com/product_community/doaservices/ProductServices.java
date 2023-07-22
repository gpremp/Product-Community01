package com.product_community.doaservices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product_community.entities.product.Product;
import com.product_community.reprository.ProductReprository;

/**
 * Product service class to manage product database operation 
 * @author premgupta
 *
 */
@Service
public class ProductServices {
	
	@Autowired
	private ProductReprository productReprository;
	
	/**
	 * Method to save new product into the database 
	 * @param product Represents the object of product 
	 * @return 
	 */
	public Product saveProduct(final Product product) {
		return this.productReprository.save(product);
	}
	
	/**
	 * method to get the object of product by its ID 
	 * @param id represents the idea of product 
	 * @return return the object of product 
	 */
	public Product getProduct(final int id) {
		final Optional<Product> product= this.productReprository.findById(id);
		if(product.isPresent()) {
			System.out.println("id");
			return product.get();
		}
		return null;
	}
	
	/**
	 * method to get the product list by its name 
	 * @param name represents the name of product 
	 * @return returns the list of product 
	 */
	public List<Product> getProductsbyName(final String name){
		return this.productReprository.findByProductName(name);
	}
	
	/**
	 * method to get the list of products by its name and brand name 
	 * @param name represents the name of product 
	 * @param brand represents the brand name of product 
	 * @return returns the list of product 
	 */
	public List<Product> getProductsbyNameAndBrand(final String name,final String brand){
		return this.productReprository.findByProductNameAndProductBrand(name, brand);
	}
	
	/**
	 * method to get the list of products by its brand name 
	 * @param brand represents the name of brand of product 
	 * @return returns the list of products 
	 */
	public List<Product> getProductsbyBrand(final String brand){
		return this.productReprository.findByProductBrand(brand);
	}
	
	/**
	 * method to get the list of all products 
	 * @return return the list of products 
	 */
	public List<Product> getProducts(){
		return this.productReprository.findAll();
	}
}
