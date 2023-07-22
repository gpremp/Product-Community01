package com.product_community.reprository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product_community.entities.product.ProductReview;

public interface ReviewReprository extends JpaRepository<ProductReview, Integer>{
	public List<ProductReview> findByProductCode(final int id);

}
