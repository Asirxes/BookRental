// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private isLoggedIn = false;

//   login() {
//     this.isLoggedIn = true;
//   }

//   logout() {
//     this.isLoggedIn = false;
//   }

//   isLoggedInUser() {
//     return this.isLoggedIn;
//   }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;
  private currentUser: string | null;

  constructor() {
    this.currentUser = null;
  }

  login(username: string, password: string): void {
    // Logika logowania użytkownika
    this.currentUser = username;
  }

  logout(): void {
    // Logika wylogowywania użytkownika
    this.currentUser = null;
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }
}
