import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/ApiServices/user-api.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  user={
    email:'',
    password:''
  }
  constructor(private userService:UserApiService,private router:Router,private loginService:UserServiceService) { }

  ngOnInit(): void {
  }

  /**
   * Function to authenticate a user and forward to admin Dashboard
   */
  public signinForm(){
    console.log(this.user);
    this.userService.authenticateAdmin(this.user).subscribe(
      (data:any)=>{
        if(data != null){
          this.loginService.loginUser(data);
          this.router.navigate(['adminDashboard']);
        }else{
          let error:any = document.getElementsByClassName("error");
          error[0].innerHTML = "*Invalid email and password"
        }
      }
    )
  }

}
