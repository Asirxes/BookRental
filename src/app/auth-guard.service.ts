import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // Sprawdź, czy użytkownik jest zalogowany (np. poprzez sprawdzenie tokenu autoryzacji)

    const isLoggedIn = true; // Przykładowe sprawdzenie, czy użytkownik jest zalogowany
    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Przekieruj niezalogowanego użytkownika na stronę logowania
      return false;
    }

    return true;
  }

}
