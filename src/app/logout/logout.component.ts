import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router) {}

  logout() {
    // Tutaj możesz zaimplementować logikę wylogowywania użytkownika
    // Możesz zresetować dane użytkownika lub skorzystać z usługi autoryzacji

    // Przykład: Przekierowanie użytkownika do strony logowania
    this.router.navigate(['/login']);
  }
}
