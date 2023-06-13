import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user!: string;

  constructor() { }

  ngOnInit() {
    // Pobierz informacje o zalogowanym użytkowniku (np. z serwera) i przypisz do zmiennej user
    this.user = 'user123';
  }

}
