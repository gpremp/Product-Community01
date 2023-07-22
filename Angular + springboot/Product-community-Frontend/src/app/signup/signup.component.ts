import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../ApiServices/user-api.service';
import { User } from '../entities/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User = new User();

  constructor(private userApi:UserApiService) { }

  ngOnInit(): void {
  }

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
public isSentenceValid(sentence: string): boolean {
  const words = sentence.split(' ');

  return words.some((word) => /\d/.test(word));
}

/**
 * Function to create new user account
 */
  public signupFormSumbit(){
    this.clearErrors();
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const letterCheck = /^[a-zA-Z]+$/;

    if(this.isSentenceValid(this.user.name)){
        this.setError("name","*Number not allowed");
        return;
    }
  if(!this.user.email.match(emailformat)){
      this.setError("email","*Email is not valid");
      return
  }
  if(this.user.password.length<5){
      this.setError("password","*Password should more than 4 charecter");
      return
}
    this.userApi.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data)
        if(data!=null){
          this.user.email='';
          this.user.name=''
          this.user.password=''
          Swal.fire("Success!", "Yours account created!", "success");
        }else{
          Swal.fire("You have already an account!", "Please SignIn!", "error");
        }
      }
    )

  }

}
