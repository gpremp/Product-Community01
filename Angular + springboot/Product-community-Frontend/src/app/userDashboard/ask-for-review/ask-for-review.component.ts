import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/ApiServices/product-api.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-ask-for-review',
  templateUrl: './ask-for-review.component.html',
  styleUrls: ['./ask-for-review.component.css']
})
export class AskForReviewComponent implements OnInit {

  productData={
    productCode:'',
    productBrand:'',
    productName:'', 
   }

  constructor(private productService:ProductApiService,private router:Router,private loginService:UserServiceService) { }

  ngOnInit(): void {
  }

  /**
   * Function to ask For review of a product if product code already present 
   * then it forward to product page
   */
  public askReview(){
    this.productService.getProduct(Number(this.productData.productCode)).subscribe(
      (data:any)=>{
        if(data != null){
          let error:any = document.getElementsByClassName("wait");
          error[0].innerHTML = "Product Code already exits, please wait ..."
          setTimeout(()=>{
            this.router.navigate([`userdashboard/product/${this.productData.productCode}`])
          }, 6000);
          
        }
      }
    )
  }

  /**
   * function to get the name of user
   * @returns returns the name of user
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
