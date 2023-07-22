import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../entities/Review';
import { Product } from '../entities/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http:HttpClient) { }

  public addProduct(productData:Product){
    return this.http.post('http://localhost:8080/product',productData);
  }

  /**
   * HTTP request function to get a list of products by product code product name and product brand
   * @param productData product data which contain product code product name and product brand
   * @returns returns the list of products
   */
  public getProducts(productData:any){
    return this.http.get(`http://localhost:8080/products?code=${productData.productCode}&brand=${productData.productBrand}&name=${productData.productName}`)
  }

  /**
   * HTTP request to get object of a product by its ID
   * @param id represents the id of product
   * @returns returns the object of product
   */
  public getProduct(id:number){
    return this.http.get(`http://localhost:8080/product/${id}`)
  }

  /**
   * HTTP request to get a reviews of a product by its ID
   * @param id Represents the ID of product
   * @returns returns The list of reviews
   */
  public getReviews(id:number){
    return this.http.get(`http://localhost:8080/reviews/${id}`)
  }

  /**
   * HTTP request to add a new review of a product
   * @param review object of a review
   * @returns returns to object of review
   */
  public addReview(review:Review){
    return this.http.post(`http://localhost:8080/review`,review);
  }

  /**
   * HTTP request to get the list of all products
   * @returns returns the list of products
   */
  public getAllProducts(){
    return this.http.get(`http://localhost:8080/admin/products`)
  }

}
