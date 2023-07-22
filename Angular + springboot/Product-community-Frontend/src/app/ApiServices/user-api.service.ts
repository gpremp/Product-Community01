import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/User';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }

  /**
   * HTTP requestfunctionto add new user to database
   * @param user object of user which contain details of user
   * @returns 
   */
  public addUser(user:User){
    return this.http.post(`http://localhost:8080/user`,user);
  }

  /**
   * HTTP request function to authenticate a user
   * @param loginData login data which contain e-mail and password
   * @returns returns the object of user
   */
  public authenticateUser(loginData:any){
    return this.http.get(`http://localhost:8080/user?email=${loginData.email}&password=${loginData.password}`)
  }
  /**
   * HTTP request function to authenticate admin
   * @param loginData login data which contain e-mail ID and password
   * @returns return the object of admin
   */
  public authenticateAdmin(loginData:any){
    return this.http.get(`http://localhost:8080/admin?email=${loginData.email}&password=${loginData.password}`)
  }

  /**
   * http request function to get the stats of number of users, number of reviews, and number of products
   * @returns return the object of the stats which contain number of reviews, number of products, and number of users
   */
  public getStats(){
    return this.http.get(`http://localhost:8080/stats`)
  }
}
