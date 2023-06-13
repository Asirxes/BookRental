import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartsService {
  private apiUrl = 'http://127.0.0.1:8000/Cart';

  constructor(private http: HttpClient) {}

  getKoszyk() {
    return this.http.get(`${this.apiUrl}/getBooksFromCart`);
  }

  dodajDoKoszyka(id:string){
    const body = {
        id_book: id
    };
    return this.http.post(`${this.apiUrl}/addBookToCart`,body);
  }

  removeFromKoszyk(id:string){
    const body = {
      id_book: id
  };
  return this.http.post(`${this.apiUrl}/removeBooksById`,body);
  }

  zamow(){
    const body = {
      id_book: "temp"
  };
    return this.http.post(`${this.apiUrl}/removeAllTestEmailBooks`,body);
  }
}