import { Injectable } from '@angular/core';
import { Parameter } from '../model/parameter';
import { ProductItem } from '../model/product-item';
import { DataProviderService } from './data-provider.service';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  productFilters: string[][] = [];
  initialParametersLength: number;

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

  getFilterParameters(items: string[][], lastChangedParameter: Parameter) {
    let parameters: Parameter[] = [];

    items.forEach((parameterItem, index) => {
      parameterItem = parameterItem.filter(item => { return !!item });
      
      if (parameterItem.length) {
        if (lastChangedParameter.title === this.dataProvider.parameterTitles[index]) {
          parameters.push(lastChangedParameter);
        } else {
          parameters.push(
            { 
              title: this.dataProvider.parameterTitles[index], 
              items: this.getParameterItemsObject(parameterItem)
            }
          );
        }
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

  getFilteredProductItems(productItems: ProductItem[], productFilters: string[][], productFilterIndex: number) {
    let chosenFilterCategories: ProductItem[][] = this.dataProvider.categories
        .filter(category => productFilters[productFilterIndex].includes(category.title))
        .map(category => category.categoryProducts);
    let filteredProductItems: ProductItem[] = 
        this.getParameterProductItems(productItems, chosenFilterCategories, productFilters[productFilterIndex]);

    if (productFilterIndex === productFilters.length - 1) {
      return this.getPriceFilteredProductItems(productItems, productFilters[productFilterIndex]);
    }  
    
    productFilterIndex++;

    return this.getFilteredProductItems(filteredProductItems, productFilters, productFilterIndex);
  }

  getPriceFilteredProductItems(productItems: ProductItem[], currentProductFilter: string[]): ProductItem[] {
    return productItems.filter(productItem => {
      let productPrice: number = +productItem.price.replace(' ', '');
      let filterMinPrice: number = +currentProductFilter[0];
      let filterMaxPrice: number = +currentProductFilter[1];

      return productPrice >= filterMinPrice && productPrice <= filterMaxPrice;
    });
  }

  getParameterProductItems(productItems: ProductItem[], 
      chosenFilterCategories: ProductItem[][], 
      currentProductFilter: string[]): ProductItem[] {
    if (chosenFilterCategories.length) {
      return productItems.filter(productItem => 
        chosenFilterCategories.some(categoryProductItems => 
          categoryProductItems.some(categoryProductItem => {
            return categoryProductItem.title === productItem.title;
          })
        )
      );
    } else {
      return productItems.filter(productItem => {
        return currentProductFilter.some(productFilter => 
          Object.values(productItem).includes(productFilter));
      });
    }
  }
}
