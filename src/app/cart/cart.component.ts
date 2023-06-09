// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';
// import { Book } from '../book';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   cartItems: Book[] = [];
//   totalPrice: number = 0;

//   constructor(private cartService: CartService) { }

//   ngOnInit() {
//     this.cartItems = this.cartService.getCartItems();
//     this.calculateTotalPrice();
//   }

//   calculateTotalPrice() {
//     this.totalPrice = this.cartItems.reduce((total, book) => total + book.price, 0);
//   }

//   removeCartItem(book: Book) {
//     this.cartService.removeCartItem(book);
//     this.calculateTotalPrice();
//   }

//   finalizePayment() {
//     // Implementuj logikę finalizacji płatności
//     // Możesz tutaj wysłać żądanie do serwera, zaktualizować bazę danych itp.
//     // Po sfinalizowaniu płatności możesz wyczyścić koszyk i wyświetlić potwierdzenie
//     this.cartService.clearCart();
//     this.cartItems = [];
//     this.totalPrice = 0;
//     alert('Płatność została sfinalizowana. Dziękujemy za zakupy!');
//   }
// }



// import { Component } from '@angular/core';
// import { CartService } from '../cart.service';
// import { Book } from '../book';
// interface CartItem {
//   book: Book;
//   quantity: number;
// }

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent {
//   cartItems: CartItem[] = [];

//   addToCart(book: Book) {
//     const existingCartItem = this.cartItems.find(item => item.book === book);
//     if (existingCartItem) {
//       existingCartItem.quantity++;
//     } else {
//       this.cartItems.push({ book, quantity: 1 });
//     }
//   }

//   removeFromCart(cartItem: CartItem) {
//     const index = this.cartItems.indexOf(cartItem);
//     if (index !== -1) {
//       this.cartItems.splice(index, 1);
//     }
//   }

//   updateQuantity(cartItem: CartItem, newQuantity: number) {
//     cartItem.quantity = newQuantity;
//   }
// }

import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
     selector: 'app-cart',
     templateUrl: './cart.component.html',
     styleUrls: ['./cart.component.css']
   })

export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems(); // dorzucenie ksiązek na sztywno
  }

  // ngOnInit() {
  //   this.cartItems = this.cartService.getCartItems(); //wcześniejszy dorzut książek
  // }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }

  updateQuantity(item: any) {
    this.cartService.updateQuantity(item);
  }

  calculateTotalPrice(): number {
    let total = 0;
    for (const item of this.cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  }
}

