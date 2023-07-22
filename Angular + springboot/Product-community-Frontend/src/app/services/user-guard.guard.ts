import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
/**
 * guard to secure pages of user and admin From unauthorized user
 */
export class UserGuardGuard implements CanActivate {

  constructor(private userService:UserServiceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userService.isUserLogin()){
        return true;
      }
      this.router.navigate(['']);
      return false;
  }
  
}
