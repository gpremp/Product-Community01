package com.product_community.doaservices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product_community.entities.Admin;
import com.product_community.reprository.AdminReprository;

/**
 * Service class of admin to get the details of admin 
 * @author premgupta
 *
 */
@Service
public class AdminServices {
	
	@Autowired
	AdminReprository adminReprository;
	
	/**
	 * Method to get the object of admin by e-mail ID 
	 * @param email Represents the e-mail of admin 
	 * @return Returns the object of admin 
	 */
	public Admin getAdmin(final String email) {
		final List<Admin> admins = this.adminReprository.findByEmail(email);
		if(admins.size()>0) {
			return admins.get(0);
		}
		return null;
	}

}
