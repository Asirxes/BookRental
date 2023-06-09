import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { LoginPageComponent } from './login-page/login-page.component';
import {MatIconModule} from '@angular/material/icon';
//import { SecondpageComponent } from './secondpage/secondpage.component';
//import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LogoutComponent } from './logout/logout.component';
//import { KoszykComponent } from './koszyk/koszyk.component'
import { ApiService } from './services/apiService';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { XMLService } from './services/xmlService';
import { HomeComponent } from './home/home-page.component';
//import { DatailsPageComponent } from './datails-page/datails-page.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { XmlPageComponent } from './xml-page/xml-page.component';
import { JsonPageComponent } from './json-page/json-page.component';
@NgModule({
  declarations: [
    AppComponent,
   // LoginPageComponent,
    //SecondpageComponent,
   // RegistrationPageComponent,
    FirstPageComponent,
    LogoutComponent,
   //KoszykComponent,
    AppComponent,
    HomeComponent,
 //   DatailsPageComponent,
    CartComponent,
    DetailsComponent,
    UserListComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    AccountComponent,
    XmlPageComponent,
    JsonPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService,XMLService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
