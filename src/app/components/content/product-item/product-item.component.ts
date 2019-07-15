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
  
  addedToCart: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addProductItemToCart(productTitle: string, productPrice: string) {
    this.addedToCart = true;
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
    this.addedToCart = false;

    this.cartService.removeCartItem(productTitle);
  }

}
