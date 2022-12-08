import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';

const myRoute:Routes=[
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserloginComponent,
    UsersignupComponent,
    AddproductComponent,
    ViewproductComponent,
    SearchproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
