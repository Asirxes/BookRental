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
    this.currentUser = username;
  }

  logout(): void {
    this.currentUser = null;
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }
}
