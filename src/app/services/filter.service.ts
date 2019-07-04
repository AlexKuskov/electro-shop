import { Injectable } from '@angular/core';
import { Parameter } from '../model/parameter';
import { ProductItem } from '../model/product-item';
import { DataProviderService } from './data-provider.service';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  activeCategory: Category;

  constructor(public dataProvider: DataProviderService) { }

  getAllParameterItems() {
    let items: string[][] = [];
    let categoryProducts: ProductItem[] = this.activeCategory.categoryProducts;

    items.push(this.dataProvider.categories.map(category => category.title));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.manufacturer));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.diagonal));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.os));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.screenSize));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.memoryCapacity));

    return items;
  }

  getCategoryParameters() {
    let parameters: Parameter[] = [];

    this.getAllParameterItems().forEach((parameterItem, index) => {
      parameterItem = parameterItem.filter(item => { return !!item });
      
      if (parameterItem.length) {
        parameters.push(
          { 
            title: this.dataProvider.parameterTitles[index], 
            items: this.getParameterItemsObject(parameterItem)
          }
        );
      }
    });

    return parameters;
  }

  getParameterItemsObject(items: string[]): Object {
    let parameterItems: Object = {};

    items.forEach(item => {
      parameterItems[item] = parameterItems[item] ? parameterItems[item] + 1 : 1;
    });

    return parameterItems;
  }
}
