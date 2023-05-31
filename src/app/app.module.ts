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
import { LogoutComponent } from './logout/logout.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SecondpageComponent,
    RegistrationPageComponent,
    FirstPageComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
