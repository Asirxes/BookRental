import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBookById(bookId: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://openlibrary.org/dev/docs/api/books';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.apiUrl);
  }
}
