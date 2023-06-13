import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Szkielet';
  isLogged='false';

  constructor(){
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
    localStorage.setItem('logged','false');
    this.isLogged = 'false';
  }
}
