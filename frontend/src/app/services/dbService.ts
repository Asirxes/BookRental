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
}
