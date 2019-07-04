import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { ProductItem } from '../model/product-item';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchValue: string;

  constructor(private dataProvider: DataProviderService) { }

  getSearchResult() {
    let searchResult: ProductItem[] = [];

    this.dataProvider.categories.forEach(category => {
      this.iterateCategoryProducts(category, searchResult);
    });

    return searchResult;
  }

  iterateCategoryProducts(category: Category, searchResult: ProductItem[]) {
    category.categoryProducts.forEach(categoryProduct => {
      let lowerProductTitle: string = categoryProduct.title.toLowerCase();
      let lowerSearchValue: string = this.searchValue.toLowerCase();
      
      if(lowerProductTitle.includes(lowerSearchValue)) {
        searchResult.push(categoryProduct);
      }
    });
  }
}
