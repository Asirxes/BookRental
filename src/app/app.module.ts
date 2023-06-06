import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatIconModule} from '@angular/material/icon';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LogoutComponent } from './logout/logout.component';
import { KoszykComponent } from './koszyk/koszyk.component'
import { ApiService } from './services/apiService';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SecondpageComponent,
    RegistrationPageComponent,
    FirstPageComponent,
    LogoutComponent,
    KoszykComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
