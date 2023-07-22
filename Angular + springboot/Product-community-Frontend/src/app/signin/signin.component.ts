import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../ApiServices/user-api.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user={
    email:'',
    password:''
  }
  constructor(private userService:UserApiService,private router:Router,private loginService:UserServiceService) { }

  ngOnInit(): void {
  }

  /**
   * Function to submit sign in form and authenticate a user and forward to user dashboard
   */
  public signinForm(){
    console.log(this.user);
    this.userService.authenticateUser(this.user).subscribe(
      (data:any)=>{
        if(data != null){
          this.loginService.loginUser(data);
          this.router.navigate(['userdashboard']);
        }else{
          let error:any = document.getElementsByClassName("error");
          error[0].innerHTML = "*Invalid email and password"
        }
      }
    )
  }

}
