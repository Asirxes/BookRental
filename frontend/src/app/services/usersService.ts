import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class UsersService {
  
  private apiUrl = 'http://127.0.0.1:8000/USERS';

  constructor(private http: HttpClient) {}

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

  changePassword(currentPassword: string, newPassword: string): Observable<any> {

    return this.http.post<any>('API_URL/changePassword', { currentPassword, newPassword });
  }
}
