import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponent} from './home/home-page.component'
import { DetailsComponent } from './details/details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guard/auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { XmlPageComponent } from './xml-page/xml-page.component';
import { JsonPageComponent } from './json-page/json-page.component';
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './addbook/addbook.component';
import { EditBookComponent } from './edit-book/edit-book.component';
const approutes: Routes = [
  { path: 'First', component: FirstPageComponent },
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
  { path: 'json', component:JsonPageComponent},
  { path: 'user', component: UserComponent},
  { path: 'charts', component: ChartsComponent},
  { path : 'change-password', component: ChangePasswordComponent},
  { path : 'admin', component: AdminpageComponent},
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'add', component:AddBookComponent},
  { path: 'edit-book/:id', component:EditBookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(approutes,{
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
