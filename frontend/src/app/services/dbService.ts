import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  addBooks(title:string,autor:string,description:string,cover:string,price:string){
    const body = {
      title:title,
      author: autor,
      description: description,
      coverImageUrl: cover,
      price:price
    }
    return this.http.post(`${this.apiUrl}/addBooks`,body);
  }
  removeBook(bookId: number) {
    throw new Error('Method not implemented.');
  }

  updateBook(bookId: string, updatedBookData: any) {
    throw new Error('Method not implemented.');
  }
}
