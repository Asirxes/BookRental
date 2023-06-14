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
    //var newBook =
     // '{"title": "TRAMPOLINA1","author": "TRAMPOLINA2","description": "Opis nowej książki","coverImageUrl": "https://example.com/new-book.jpg","price":"19.99"}';
    const bookObject = JSON.parse(newBook);
    return this.http.post(`${this.apiUrl}/addBooks`, bookObject).subscribe(
      (response) => {
        console.log('Sukces:', response);
      },
      (error) => {
        console.error('Błąd:', error);
      }
    );
  }

  addXmlToXml(content:string){
    const body = {
      xml: content
    }
    return this.http.post(`${this.apiUrl}/addXMLtoXML`, body).subscribe(
      (response) => {
        console.log('Sukces:', response);
      },
      (error) => {
        console.error('Błąd:', error);
      }
    );
  }

  exportXML() {
    return this.http.get(`${this.apiUrl}/exportXML`, { responseType: 'text' }).subscribe(
      (response) => {
        const xmlData = response;
        const blob = new Blob([xmlData], { type: 'text/xml' });
        const url = window.URL.createObjectURL(blob);
  
        const link = document.createElement('a');
        link.href = url;
        link.download = 'exported.xml';
        link.click();
  
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Błąd:', error);
      }
    );
  }
}
