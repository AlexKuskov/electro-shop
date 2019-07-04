import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { ProductItem } from '../model/product-item';
import { Category } from '../model/category';
import { Parameter } from '../model/parameter';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchValue: string = '';
  parameters: Parameter[] = [];
  searchResult: ProductItem[] = [];

  constructor(private dataProvider: DataProviderService) { }

  getSearchResult(): void {
    this.searchResult = [];

    this.dataProvider.categories.forEach(category => {
      this.iterateCategoryProducts(category);
    });

    this.getParametersBySearchResult(this.searchResult);
  }

  iterateCategoryProducts(category: Category): void {
    //add category title
    category.categoryProducts.forEach(categoryProduct => {
      
      let lowerProductTitle: string = categoryProduct.title.toLowerCase();
      let lowerSearchValue: string = this.searchValue.toLowerCase();
      
      if(lowerProductTitle.includes(lowerSearchValue)) {
        this.searchResult.push(categoryProduct);
      }
    });
  }

  getParametersBySearchResult(searchResult: ProductItem[]) {
    this.parameters = [];
    let items: string[][] = [];

    items.push(this.dataProvider.categories.map(category => category.title));
    items.push(searchResult.map(product => product.manufacturer));
    items.push(searchResult.map(product => product.diagonal));
    items.push(searchResult.map(product => product.os));
    items.push(searchResult.map(product => product.screenSize));
    items.push(searchResult.map(product => product.memoryCapacity));

    items.forEach((parameterItem, index) => {
      parameterItem = parameterItem.filter(item => { return !!item });
      
      if (parameterItem.length) {
        this.parameters.push(
          { 
            title: this.dataProvider.parameterTitles[index], 
            items: this.getParameterItemsObject(parameterItem)
          }
        );
      }
    });
  }

  getParameterItemsObject(items: string[]): Object {
    let parameterItems: Object = {};

    items.forEach(item => {
      parameterItems[item] = parameterItems[item] ? parameterItems[item] + 1 : 1;
    });

    return parameterItems;
  }
}
