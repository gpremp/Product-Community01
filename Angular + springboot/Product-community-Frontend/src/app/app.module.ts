import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './userDashboard/user-dashboard/user-dashboard.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './userDashboard/products/products.component';
import { ProductComponent } from './userDashboard/product/product.component';
import { AskForReviewComponent } from './userDashboard/ask-for-review/ask-for-review.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminSigninComponent } from './Admin/admin-signin/admin-signin.component';
import { AdminProductDashboardComponent } from './Admin/admin-product-dashboard/admin-product-dashboard.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SigninComponent,
    SignupComponent,
    UserDashboardComponent,
    ProductsComponent,
    ProductComponent,
    AskForReviewComponent,
    AdminDashboardComponent,
    AdminSigninComponent,
    AdminProductDashboardComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
