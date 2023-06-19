import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ApiService } from './services/apiService';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { XMLService } from './services/xmlService';
import { HomeComponent } from './home/home-page.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { XmlPageComponent } from './xml-page/xml-page.component';
import { JsonPageComponent } from './json-page/json-page.component';
import { FormatPricePipe } from './pipe/format-price.pipe';
import { AuthService } from 'src/services/auth.service';
import { dbService } from './services/dbService';
import { UsersService } from './services/usersService';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CartService } from 'src/services/cart.service';
import { CartsService } from './services/cartService';
import { JSONService } from './services/jsonService';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './addbook/addbook.component';
import { EditBookComponent } from './edit-book/edit-book.component';
@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HomeComponent,
    CartComponent,
    DetailsComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    AccountComponent,
    XmlPageComponent,
    JsonPageComponent,
    FormatPricePipe,
    ChangePasswordComponent,
    AdminpageComponent,
    BookDetailsComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    NgChartsModule
  ],
  providers: [ApiService,XMLService,AuthService,dbService,UsersService,CartsService,JSONService],
  bootstrap: [AppComponent]
})
export class AppModule { }
