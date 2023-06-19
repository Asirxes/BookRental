import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { dbService } from '../services/dbService';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartsService } from '../services/cartService';
import { SoapService } from '../services/soapService';

interface Book {
  title: string;
  author: string;
  price: number;
  coverImageUrl: string;
  id: number;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomeComponent {
  books: Book[] = [];

  addToCart(book: Book) {
    if(localStorage.getItem('logged')==null || localStorage.getItem('logged')=='false'){
      this.snackBar.open('Musisz się zalogować', 'Zamknij', {
        duration: 2000, // Czas trwania alertu w milisekundach
      });
      this.router.navigate(['/login']);
    }else{
      this.cartsService.dodajDoKoszyka(book.id.toString()).subscribe(result=>{
        console.log(result)
        this.snackBar.open(`Dodano ${book.title} do koszyka`, 'Zamknij', {
          duration: 2000, 
        });
      });
    }
    
  }

  constructor(public authService: AuthService, private dbService: dbService,private router: Router,private snackBar: MatSnackBar,
    private cartsService: CartsService,private soapService: SoapService) {
    this.dbService.getDane().subscribe((result) => {
      this.books = result as Book[];
    });
    this.soapService.fetchData().subscribe(result=>{
      console.log(result)
    })
  }
  
  logout(): void {
    this.authService.logout();
  }

  removeBook(bookId: number) {
    this.dbService.removeBook(bookId).subscribe(
      (response: any) => {
        console.log('Książka została usunięta:', response);
        location.reload();
      },
      (error: any) => {
        console.log('Wystąpił błąd podczas usuwania książki:', error);
      }
    );
  }
}
