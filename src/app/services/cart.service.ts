import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { ProductItem } from '../model/product-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor() { }

  addCartItem(cartItem: CartItem) {
    this.cartItems.push(cartItem);
    this.updateTotalPrice();
    this.saveCartItems();
  }

  removeCartItem(productTitle: string) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.title !== productTitle);
    if (this.cartItems.length) this.updateTotalPrice();
    this.saveCartItems();
  }

  updateTotalPrice() {
    let prices: number[] = this.cartItems.map(cartItem => cartItem.price * cartItem.amount);
    this.totalPrice = prices.reduce((accumulator, currentPrice) => accumulator + currentPrice);
  }

  saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  }
}
