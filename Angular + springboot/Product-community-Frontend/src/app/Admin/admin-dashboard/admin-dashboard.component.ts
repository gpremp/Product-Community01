import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/ApiServices/product-api.service';
import { Product } from 'src/app/entities/Product';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  productData={
    productCode:'',
    productBrand:'',
    productName:'', 
   }

   products:Product[] =[]   // Array of product list to store search product list
   showProducts:Product[]=[]  //products to store filter products list
  counter=0

  constructor(private router:Router,private productService:ProductApiService,private loginService:UserServiceService) { }

  /**
   * method to get all products placed
   */
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data:any)=>{
        if(data.length>0){
          this.products= data;
          this.products.forEach(val => this.showProducts.push(Object.assign({}, val)));   
        }
      }
    )
  }

  /**
   * function to submit product search form and get the product list
   */
  public productSearch(){
    this.productService.getProducts(this.productData).subscribe(
      (data:any)=>{
        if(data.length>0){
          this.products= data;
          this.showProducts.splice(0);
          this.products.forEach(val => this.showProducts.push(Object.assign({}, val))); 
        }else{
          Swal.fire("Sorry, No match Found", "Please Try Again", "error");
        }
        console.log(this.products)
      }
    )
  }

  /**
   * function to filter products according to name code and brand
   */
  public filterProducts(){
    let filter:any = (<HTMLSelectElement>document.getElementById("productFilter")).value;
    let filterVal:any = (<HTMLInputElement>document.getElementById("inputFilter")).value;
    if(filter=='name'){
      this.showProducts.splice(0);
      this.products.forEach(value=> {
        if(value.productName==filterVal){
          this.showProducts.push(value);
        }
      }); 
    }
    else if(filter=='code'){
      this.showProducts.splice(0);
      this.products.forEach(value=> {
        if(value.productCode==filterVal){
          this.showProducts.push(value);
        }
      });
    }
    else if(filter=='brand'){
      this.showProducts.splice(0);
      this.products.forEach(value=> {
        if(value.productBrand==filterVal){
          this.showProducts.push(value);
        }
      });
    }
    if(this.showProducts.length==0){
      Swal.fire("Sorry, No match Found", "Please Try Again", "error");
    }
  }

  /**
   * function to clear filters
   */
  public clearFilter(){
    this.showProducts.splice(0);
    this.products.forEach(val => this.showProducts.push(Object.assign({}, val)));
    console.log(this.showProducts)
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
