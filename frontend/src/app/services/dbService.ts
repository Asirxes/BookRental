import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from '../book';

@Injectable()
export class dbService {
  
  private apiUrl = 'http://127.0.0.1:8000/DB';

  constructor(private http: HttpClient) {}

  getDane() {
    return this.http.get(`${this.apiUrl}/getAllBooks`);
  }

  getGenres(){
    return this.http.get(`${this.apiUrl}/getGenres`);
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
    const body = {
      id: bookId
    }
    return this.http.post(`${this.apiUrl}/deleteBook`,body);
  }
  updateBook(bookId: string, updatedBookData: any): Observable<any> {
    console.log(bookId)
    const body = {
      id: bookId,
      title: updatedBookData.title,
      author: updatedBookData.author,
      coverImageUrl: updatedBookData.coverImageUrl,
      price: updatedBookData.price,
      description: updatedBookData.description
    }

    return this.http.post(`${this.apiUrl}/editBook`, body);
  }
}
