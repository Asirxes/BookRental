import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class dbService {
  
  private apiUrl = 'http://127.0.0.1:8000/DB';

  constructor(private http: HttpClient) {}

  getDane() {
    return this.http.get(`${this.apiUrl}/getAllBooks`);
  }

  getBookDetails(id:string){
    const body = {
      id: id
    }
    return this.http.post(`${this.apiUrl}/getBookDetails`,body);
  }

  addBooks(title:string,autor:string,description:string,cover:string,price:string, category:string){
    const body = {
      title:title,
      author: autor,
      description: description,
      coverImageUrl: cover,
      price:price,
      category: category
    }
    return this.http.post(`${this.apiUrl}/addBooks`,body);
  }
  removeBook(bookId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/removeBook/${bookId}`);
  }
  updateBook(bookId: string, updatedBookData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateBook/${bookId}`, updatedBookData);
  }
}
