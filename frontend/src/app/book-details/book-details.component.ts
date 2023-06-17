import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dbService } from '../services/dbService';

interface Book {
  title: string;
  author: string;
  price: number;
  coverImageUrl: string;
  id: number;
  description: string;
}

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent{
  book: Book | undefined;

  constructor(private route: ActivatedRoute, private dbService: dbService) {

    this.getBookDetails();
  }


  getBookDetails() {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.dbService.getBookDetails(bookId).subscribe(
        (result) => {
          this.book = result as Book;
        },
        (error: any) => {
          console.log('Wystąpił błąd podczas pobierania szczegółów książki:', error);
        }
      );
    }
  }
}  