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
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartsService } from '../services/cartService';
import { Book } from '../book';


@Component({
     selector: 'app-cart',
     templateUrl: './cart.component.html',
     styleUrls: ['./cart.component.css']
   })

export class CartComponent {
  cartItems: Book[] = [];

  constructor(private cartService: CartService,private snackBar: MatSnackBar,private cartsService :CartsService) {
    //this.cartItems = this.cartService.getCartItems(); // dorzucenie ksiązek na sztywno
    this.refreshCart()
  }

  refreshCart(){
    this.cartsService.getKoszyk().subscribe(response=>{
      this.cartItems = response as Book[];
    });
  }

  // ngOnInit() {
  //   this.cartItems = this.cartService.getCartItems(); //wcześniejszy dorzut książek
  // }

  removeFromCart(item: Book) {
    //this.cartService.removeFromCart(item);
    this.cartsService.removeFromKoszyk(item.id.toString()).subscribe(result=>{
      this.refreshCart();
    })
    
  }

  updateQuantity(item: any) {
    this.cartService.updateQuantity(item);
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price), 0);
  }

  zakup(){
    this.cartsService.zamow().subscribe(response=>{
      this.snackBar.open('Zakupiono poprawnie książki!', 'Zamknij', {
        duration: 2000,
      });
      this.refreshCart()  
    })
     
  }
}

