import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/ApiServices/product-api.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  productData={
   productCode:'',
   productBrand:'',
   productName:'', 
  }
  constructor(private productService:ProductApiService,private router:Router,private loginService:UserServiceService) { }

  ngOnInit(): void {
  }

  /**
   * fuction to search products according to its ID, name and brand and store
   *  the reproduct list in the local local storage
   */
  public productSearch(){
    this.router.navigate(['userdashboard'])
    this.productService.getProducts(this.productData).subscribe(
      (data:any)=>{
        if(data.length>0){
          let searchResult = localStorage.getItem("searchResult");
          if(searchResult==undefined || searchResult == '' || searchResult == null){
            localStorage.setItem("searchResult",JSON.stringify(data));
            console.log(searchResult);
          }else{
            localStorage.removeItem("searchResult");
            localStorage.setItem("searchResult",JSON.stringify(data));
            console.log(searchResult);
          }
          this.router.navigate(['userdashboard/products'])
        }else{
          Swal.fire("Sorry", "No Products Found, Please Try Again", "error");
        }
        
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
   * function to log out from current session
   */
  public logout(){
    this.loginService.loguot();
    window.location.reload();
  }
}
