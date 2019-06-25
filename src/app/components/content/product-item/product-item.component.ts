import { Component, OnInit, Input } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { ProductItem } from 'src/app/model/product-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem: ProductItem;

  constructor(public dataProviderService: DataProviderService) { }

  ngOnInit() {
  }

}
