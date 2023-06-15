import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JSONService {
  private apiUrl = 'http://127.0.0.1:8000/JSON';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(`${this.apiUrl}/getBooks`);
  }

  addBooks(newBook: string) {
    const bookObject = JSON.parse(newBook);
    return this.http.post(`${this.apiUrl}/addBooks`, bookObject);
  }

  addJSONtoJSON(jsonData: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post(`${this.apiUrl}/addJSONtoJSON`, jsonData, { headers: headers }).subscribe(result=>{
      console.log(result);
    });
  }
  

  downloadJSON() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.get(`${this.apiUrl}/downloadJSON`, { responseType: 'blob', headers: headers }).subscribe((response: any) => {
      const blob = new Blob([response], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'books.json';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }
}
