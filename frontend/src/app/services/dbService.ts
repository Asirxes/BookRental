import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class dbService {
  
  private apiUrl = 'http://127.0.0.1:8000/DB';
  getBookDetails: any;
  addBook: any;

  constructor(private http: HttpClient) {}

  getDane() {
    return this.http.get(`${this.apiUrl}/getAllBooks`);
  }
}
