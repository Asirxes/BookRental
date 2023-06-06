import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class XMLService {
  private apiUrl = 'http://127.0.0.1:8000/XML';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(`${this.apiUrl}/getBooks`);
  }

  addBooks(newBook: string) {
    //PONIŻEJ PRZYKŁAD JAK MAJĄ WYGLĄDAĆ DANE
    //var dane =
     // '{"title": "TRAMPOLINA1","author": "TRAMPOLINA2","description": "Opis nowej książki","coverImageUrl": "https://example.com/new-book.jpg"}';
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
