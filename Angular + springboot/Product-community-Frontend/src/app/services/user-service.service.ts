import { Injectable } from '@angular/core';
import { User } from '../entities/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  /**
   * Function to set the name of the user in local storage
   * @param user object of a student
   */
   public loginUser(user:User){
    localStorage.setItem('user',user.name);
  }

  /**
   * Function to monitor user login session
   * @returns return true if student login else false
   */
  public isUserLogin(){
    let user = localStorage.getItem('user')
    if(user==undefined || user == '' || user == null){
      return false
    }else{
      return true
    }
  }

  /**
   * Function to get the name of user
   * @returns returns the name of a user
   */
  public getUser(){
    let userStr = localStorage.getItem('user')
    if(userStr==undefined || userStr == '' || userStr == null){
      return false;
    }else{
      return userStr;
    }
  }
  /**
   * funtion to logout from current session
   */
  public loguot(){
    localStorage.removeItem('user');
    return true;
  }
}
