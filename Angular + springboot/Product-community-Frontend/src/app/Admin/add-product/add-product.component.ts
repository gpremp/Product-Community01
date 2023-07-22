import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/ApiServices/product-api.service';
import { Product } from 'src/app/entities/Product';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private loginService:UserServiceService,private productService:ProductApiService) { }

  ngOnInit(): void {
  }
  product:Product = new Product();

    /**
  Funtion to show error if user provide wrong input
 */
public setError(id:any, error:any){
  // let element:any = document.getElementById(id);
  (<HTMLInputElement>document.getElementById(id)).innerHTML = error;
}

/**
Fuction to clear error if user provide correct input.
*/
public clearErrors(){
  let errors:any = document.getElementsByClassName("error");
  for(let item of errors){
      item.innerHTML = "";
  }
}

  public saveProduct(): void {
    this.clearErrors();
    const letterCheck = /^[a-zA-Z]+$/;
    let nameArray = this.product.productName.split(' ')
    console.log(this.product.productName,nameArray);
    const brandArray = this.product.productBrand.split(' ');

    nameArray.some((word) => {
      if(!(letterCheck.test(word))){
        this.setError("name","*Number not allowed");
        return;
      }
    })

    brandArray.some((word) => {
      if(!(letterCheck.test(word))){
        this.setError("brand","*Number not allowed");
        return;
      }
    })

    this.productService.addProduct(this.product).subscribe(
      (data:any)=>{
        console.log(data)
        if(data!=null){
          Swal.fire("Success!", "Product saved successfully!", "success");
          this.product.productCode = 0;
          this.product.productName = '';
          this.product.productBrand = '';
          this.product.productRating = 0;
          this.product.noOfReviews = 0;
          this.product.productPrice = 0;
        }else{
          Swal.fire("Product already exits", "Please check details!", "error");
        }
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
