import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//import { SecondpageComponent } from './secondpage/secondpage.component';
//import { LoginPageComponent } from './login-page/login-page.component';
//import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LogoutComponent } from './logout/logout.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { HomeComponent} from './home/home-page.component'
import { DetailsComponent } from './details/details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { XmlPageComponent } from './xml-page/xml-page.component';
import { JsonPageComponent } from './json-page/json-page.component';

const approutes: Routes = [
 // { path: "", redirectTo: "/First", pathMatch: "full" },
  //{ path: '', component: AppComponent },
  //{ path: 'Start', component: AppComponent },
  { path: 'First', component: FirstPageComponent },
  //{ path: 'Second', component: SecondpageComponent },
 // { path: 'Logowanie', component: LoginPageComponent },
  //{ path: 'Rejestracja', component: RegistrationPageComponent },
  { path: 'Wylogowanie', component: LogoutComponent},
  { path: 'Koszyk', component: KoszykComponent},
  { path: 'home', component: HomeComponent },
  { path: "", redirectTo:"/home",pathMatch:"full" },
  { path: 'details/genre/:genreId', component: DetailsComponent },
  { path: 'details/book/:bookId', component: DetailsComponent },
  { path: 'users', component: UserListComponent,canActivate:[authGuard] },
  { path: 'users/:username', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'account', component:AccountComponent},
  { path: 'cart',component:CartComponent},
  { path: 'xml', component:XmlPageComponent},
  { path: 'json', component:JsonPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(approutes,{
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
