import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Szkielet';
  isLogged='false';

  constructor(private router: Router){
    if(localStorage.getItem('logged')!=null){
      this.isLogged = <string>localStorage.getItem('logged');
    }else{
      this.isLogged = 'false'
    }
    LoginComponent.myEventEmitter.subscribe(() => {
      this.zmienZalogowanie();
    });
  }

  zmienZalogowanie(){
    if(localStorage.getItem('logged')!=null){
      this.isLogged = <string>localStorage.getItem('logged');
    }else{
      this.isLogged = 'false'
    }
  }

  wyloguj(){
    localStorage.removeItem('logged');
    localStorage.removeItem('token');
    this.isLogged = 'false';
    this.router.navigate(['']);
  }
}
