import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LogoutComponent } from './logout/logout.component';
const approutes: Routes = [
  { path: "", redirectTo: "/First", pathMatch: "full" },
  //{ path: '', component: AppComponent },
  //{ path: 'Start', component: AppComponent },
  { path: 'First', component: FirstPageComponent },
  { path: 'Second', component: SecondpageComponent },
  { path: 'Logowanie', component: LoginPageComponent },
  { path: 'Rejestracja', component: RegistrationPageComponent },
  { path: 'Wylogowanie', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes,{
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
