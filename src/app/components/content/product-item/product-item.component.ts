import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from 'src/app/model/product-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem: ProductItem;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addProductItemToCart(productTitle: string, productPrice: string) {
    productPrice = productPrice.replace(' ', '');

    this.cartService.addCartItem(
      {
        title: productTitle, 
        price: +productPrice, 
        amount: 1 
      }
    );
  }

  removeProductItemToCart(productTitle: string) {
    this.cartService.removeCartItem(productTitle);
  }

  isAddedToCart(productTitle: string) {
    return this.cartService.cartItems.some(cartItem => cartItem.title === productTitle);
  }
}
