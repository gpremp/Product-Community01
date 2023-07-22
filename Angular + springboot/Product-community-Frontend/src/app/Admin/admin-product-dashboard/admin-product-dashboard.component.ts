import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/ApiServices/product-api.service';
import { Product } from 'src/app/entities/Product';
import { Review } from 'src/app/entities/Review';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-admin-product-dashboard',
  templateUrl: './admin-product-dashboard.component.html',
  styleUrls: ['./admin-product-dashboard.component.css']
})
export class AdminProductDashboardComponent implements OnInit {

  productId:number=0;   // Variable to store the product code of product
  product:Product = new Product();  // array of product to store theproduct list
  reviews:Review[] = []   // array of previews to store the reviews
  review:Review = new Review();  // object of review
  newReview:Review = new Review();  // 
  constructor(private productService:ProductApiService,private route:ActivatedRoute,private router:Router,
    private loginService:UserServiceService) { }

    /**
     * And the details of product by its ID and its reviews
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
   * function to approve a review
   * @param review 
   */
  public approved(review:Review){
    review.approve = 'Yes';
    this.productService.addReview(review).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }

  /**
   * function to get the name of user
   * @returns return the name of user
   */
  public getUser(){
    return this.loginService.getUser();
  }

  /**
   * function to logout from current session
   */
  public logout(){
    this.loginService.loguot();
    window.location.reload();
  }

}
