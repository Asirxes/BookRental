import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username?: string | null;
  email: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');

    // Pobierz informacje o użytkowniku (np. z serwera) i przypisz do zmiennych username i email
    if (this.username === 'root') {
      this.email = 'root@example.com';
    } else if (this.username === 'user') {
      this.email = 'user@example.com';
    }
  }
}
