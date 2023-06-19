import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartsService } from '../services/cartService';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
     selector: 'app-cart',
     templateUrl: './cart.component.html',
     styleUrls: ['./cart.component.css']
   })

export class CartComponent {
  cartItems: Book[] = [];

  constructor(private cartService: CartService,private snackBar: MatSnackBar,private cartsService :CartsService,private router: Router) {
    if(localStorage.getItem('token')){

    }else{
      this.snackBar.open('Musisz być zalogowany', 'Zamknij', {
        duration: 2000,
      });
      this.router.navigate(['']);
    }
    this.refreshCart()
  }

  refreshCart(){
    this.cartsService.getKoszyk().subscribe(response=>{
      this.cartItems = response as Book[];
    });
  }

  removeFromCart(item: Book) {
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

