import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/ApiServices/product-api.service';
import { Product } from 'src/app/entities/Product';
import { Review } from 'src/app/entities/Review';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId:number=0; // variable to store the product ID
  product:Product = new Product();  // object of a product to store the details of the product
  reviews:Review[] = []  // object of review
  review:Review = new Review();  // array of the review to store the reviews
  newReview:Review = new Review();  // object of reviews to store the details of the review
  constructor(private productService:ProductApiService,private route:ActivatedRoute,private router:Router,
    private loginService:UserServiceService) { }

    /**
     * Getting the details of product and it's reviews
     */
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProduct(this.productId).subscribe(
      (data:any)=>{
        
        this.product=data;
        console.log(this.product);
      }
    )
    this.productService.getReviews(this.productId).subscribe(
      (data:any)=>{
        this.reviews=data
        console.log(this.reviews);
      }
    )
  }

  /**
   * form to submit a review of the product
   */
  public ratingForm(){
    this.review.approve='No';
    this.review.productCode=this.product.productCode;
    this.productService.addReview(this.review).subscribe(
      (data)=>{
        this.newReview = this.review
        this.reviews.push(this.newReview);
        
    this.router.navigate([`userdashboard/product/${this.productId}`])
      }
    )
  }

  /**
   * function to get the name of user
   * @returns returns the name of the user
   */
  public getUser(){
    return this.loginService.getUser();
  }

  /**
   * function to log out from current session
   */
  public logout(){
    this.loginService.loguot();
    window.location.reload();
  }

}
