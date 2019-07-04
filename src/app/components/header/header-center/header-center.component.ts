import { Component, OnInit, ViewChild } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { ProductItem } from 'src/app/model/product-item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header-center',
  templateUrl: './header-center.component.html',
  styleUrls: ['./header-center.component.scss']
})
export class HeaderCenterComponent implements OnInit {
  @ViewChild('searchForm', {read: NgForm, static: false}) searchForm: NgForm;

  searchValue: string = '';
  searchResult: ProductItem[] = [];

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit() {
    this.dataProvider.categories.forEach(category => {
      category.categoryProducts.forEach(categoryProduct => {
        let lowerProductTitle: string = categoryProduct.title.toLowerCase();
        let lowerSearchValue: string = this.searchValue.toLowerCase();
        
        if(lowerProductTitle.includes(lowerSearchValue)) {
          this.searchResult.push(categoryProduct);
        }
      });
    });
  }

  onSubmit() {
    this.searchValue = this.searchForm.form.value.q
  }

}
