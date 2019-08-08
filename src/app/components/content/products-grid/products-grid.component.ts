import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {

  @Input()
  productItems: ProductItem[];

  constructor() { }

  ngOnInit() {
  }

}
