package com.product_community.reprository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product_community.entities.Admin;

public interface AdminReprository extends JpaRepository<Admin, Integer>{
	public List<Admin> findByEmail(final String email);

}
