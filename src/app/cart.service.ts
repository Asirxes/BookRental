import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Book[] = [];

  constructor() { }

  addToCart(book: Book) {
    this.cartItems.push(book);
  }

  removeCartItem(book: Book) {
    const index = this.cartItems.indexOf(book);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}
