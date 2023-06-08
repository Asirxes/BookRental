import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Book } from '../book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Book[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, book) => total + book.price, 0);
  }

  removeCartItem(book: Book) {
    this.cartService.removeCartItem(book);
    this.calculateTotalPrice();
  }

  finalizePayment() {
    // Implementuj logikę finalizacji płatności
    // Możesz tutaj wysłać żądanie do serwera, zaktualizować bazę danych itp.
    // Po sfinalizowaniu płatności możesz wyczyścić koszyk i wyświetlić potwierdzenie
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
    alert('Płatność została sfinalizowana. Dziękujemy za zakupy!');
  }
}
