package com.product_community.reprository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product_community.entities.product.Product;

public interface ProductReprository extends JpaRepository<Product, Integer>{
	public List<Product> findByProductName(final String name);
	
	public List<Product> findByProductNameAndProductBrand(final String name,final String brand);
	
	public List<Product> findByProductBrand(final String brand);

}
