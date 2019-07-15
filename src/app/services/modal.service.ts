import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible: boolean;
  isCartVisible: boolean;

  constructor() { }

  closeModal() {
    this.isVisible = false;
  }

  openModal() {
    this.isVisible = true;
    this.isCartVisible = true;
  }

  proceedToCheckout() {
    this.isCartVisible = false;
  }

  backToCart() {
    this.isCartVisible = true;
  }
}
