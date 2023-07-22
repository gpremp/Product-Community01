import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/Product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[] =[]  //  Array of products to store theproduct list
  showProducts:Product[]=[]  // array of products to show the product list
  constructor() { }

  /**
   * getting the list of products from local storage
   */
  ngOnInit(): void {
    let searchResult:any= localStorage.getItem("searchResult");
    this.products =JSON.parse(searchResult);
    this.products.forEach(val => this.showProducts.push(Object.assign({}, val)));
  }

  /**
   * function to filter products according to its code, name and brand
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
    console.log(this.showProducts)
  }

  /**
   * function to clear the filters
   */
  public clearFilter(){
    this.showProducts.splice(0);
    this.products.forEach(val => this.showProducts.push(Object.assign({}, val)));
    console.log(this.showProducts)
  }

}
