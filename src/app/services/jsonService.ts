import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JSONService {
  private apiUrl = 'http://127.0.0.1:8000/JSON';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(`${this.apiUrl}/getBooks`);
  }

  addBooks(newBook: string) {
    //PONIŻEJ PRZYKŁAD JAK MAJĄ WYGLĄDAĆ DANE
    //var newBook =
     // '{"title": "TRAMPOLINA1","author": "TRAMPOLINA2","description": "Opis nowej książki","coverImageUrl": "https://example.com/new-book.jpg","price":"19.99"}';
    const bookObject = JSON.parse(newBook);
    console.log('Dziala to w ogole?');
    return this.http.post(`${this.apiUrl}/addBooks`, bookObject).subscribe(
      (response) => {
        console.log('Sukces:', response);
      },
      (error) => {
        console.error('Błąd:', error);
      }
    );
  }
}
