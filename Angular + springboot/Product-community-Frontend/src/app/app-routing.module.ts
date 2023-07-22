import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminProductDashboardComponent } from './Admin/admin-product-dashboard/admin-product-dashboard.component';
import { AdminSigninComponent } from './Admin/admin-signin/admin-signin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserGuardGuard } from './services/user-guard.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AskForReviewComponent } from './userDashboard/ask-for-review/ask-for-review.component';
import { ProductComponent } from './userDashboard/product/product.component';
import { ProductsComponent } from './userDashboard/products/products.component';
import { UserDashboardComponent } from './userDashboard/user-dashboard/user-dashboard.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';

const routes: Routes = [
  {
    path : '',
    component : HomePageComponent,
    children:[
      {
        path : '',
        component : SigninComponent,
      },
      {
        path : 'signup',
        component : SignupComponent,
      },
      {
        path : 'adminSignup',
        component : AdminSigninComponent,
      }
    ]
  },
  {
    path : 'userdashboard',
    component : UserDashboardComponent,
    canActivate: [UserGuardGuard],
    children:[
      {
        path:'products',
        component:ProductsComponent
      }
    ]
  },
  {
    path:'userdashboard/product/:id',
    component:ProductComponent,
    pathMatch:'full',
    canActivate: [UserGuardGuard],
  },
  {
    path:'userdashboard/askReview',
    component:AskForReviewComponent,
    pathMatch:'full',
    canActivate: [UserGuardGuard],
  },
  {
    path:'adminDashboard',
    component:AdminDashboardComponent,
    pathMatch:'full',
    canActivate: [UserGuardGuard],
  },
  {
    path:'adminDashboard/product/:id',
    component:AdminProductDashboardComponent,
    pathMatch:'full',
    canActivate: [UserGuardGuard],
  },
  {
    path:'adminDashboard/product',
    component:AddProductComponent,
    pathMatch:'full',
    canActivate: [UserGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
