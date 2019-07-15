import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/cart-item';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService,
              public modalService: ModalService) { }

  ngOnInit() {
  }

  addItemAmount(cartItem: CartItem) {
    cartItem.amount++;
    this.cartService.updateTotalPrice();
  }

  subtractItemAmount(cartItem: CartItem) {
    if (cartItem.amount > 1) cartItem.amount--;
    this.cartService.updateTotalPrice();
  }

}
