import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [{
    title: 'Duma i uprzedzenie',
    author: 'Jane Austen',
    price: 35.99,
    quantity: 1,
  },
  {
    title: 'Harry Potter',
    author: 'Inny autor',
    price: 29.99,
    quantity: 1,
  },
  {
    title: 'Inna książka',
    author: 'Jeszcze inny autor',
    price: 20.99,
    quantity: 1,
  },];

  addToCart(book: any) {
    this.cartItems.push(book);
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  updateQuantity(item: any) {
    if (item.quantity < 1) {
      item.quantity = 1;
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  calculateTotalPrice(): number {
    let total = 0;
    for (const item of this.cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  }
}
