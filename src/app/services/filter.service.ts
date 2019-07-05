import { Injectable } from '@angular/core';
import { Parameter } from '../model/parameter';
import { ProductItem } from '../model/product-item';
import { DataProviderService } from './data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(public dataProvider: DataProviderService) { }

  getAllParameterItems(categoryProducts: ProductItem[], categoryTitles: string[]) {
    let items: string[][] = [];

    items.push(categoryTitles);
    items.push(categoryProducts.map(categoryProduct => categoryProduct.manufacturer));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.diagonal));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.os));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.screenSize));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.memoryCapacity));

    return items;
  }

  getFilterParameters(items: string[][]) {
    let parameters: Parameter[] = [];

    items.forEach((parameterItem, index) => {
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
