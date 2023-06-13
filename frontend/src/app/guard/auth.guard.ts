import { CanActivateFn ,Router} from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const isLoggedIn = true; // Przykładowe sprawdzenie, czy użytkownik jest zalogowany
    if (!isLoggedIn) {
      router.navigate(['/login']); // Przekieruj niezalogowanego użytkownika na stronę logowania
      return false;
    }

    return true;
};
