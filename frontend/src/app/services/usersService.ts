import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class UsersService {
  
  private apiUrl = 'http://127.0.0.1:8000/USERS';

  constructor(private http: HttpClient) {}

  checkAdmin(){
    const body = {
      token: localStorage.getItem('token')
    }
    return this.http.post(`${this.apiUrl}/checkAdmin`, body);
  }

  zarejestruj(login: string, haslo: string) {
    const body = {
      email: login,
      password: haslo
    };

    return this.http.post(`${this.apiUrl}/register`, body);
  }

  login(email: string,password:string){
    const body = {
      email: email,
      password: password
    };

    return this.http.post(`${this.apiUrl}/login`, body);
  }

  getAllUsersWithKoszyks(){
    return this.http.get(`${this.apiUrl}/getAllUsersWithKoszyks`);
  }

  changePassword(currentPassword: string, newPassword: string): Observable<any> {

    const body = {
      newPassword: newPassword,
      token: localStorage.getItem('token')
    };

    return this.http.post(`${this.apiUrl}/changePassword`, body);
  }
}
