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
    if (productFilterIndex === productFilters.length) {
      return productItems;
    }
    
    let chosenFilterCategories: Category[] = this.dataProvider.categories.filter(category => {
      return productFilters[productFilterIndex].includes(category.title)
    });
    
    if (chosenFilterCategories.length) {
      let chosenFilt: ProductItem[][] = chosenFilterCategories.map(category => category.categoryProducts);
      let filt: ProductItem[] = productItems.filter(productItem => {
        return chosenFilt.some(productItems => {
          return productItems.some(prodItem => {
            return prodItem.title === productItem.title;
          });
        });
      });

      productFilterIndex++;

      return this.getFilteredProductItems(filt, productFilters, productFilterIndex);
    }

    if (productFilterIndex === productFilters.length - 1) {
      return productItems.filter(productItem => {
        let productPrice: number = +productItem.price.replace(' ', '');
        let filterPrice: string[] = productFilters[productFilterIndex];

        return productPrice >= +filterPrice[0] && 
          productPrice <= +filterPrice[1];
      });
    }
    
    let filteredProductItems: ProductItem[] = productItems.filter(productItem => {
      return productFilters[productFilterIndex].some(productFilter => 
        Object.values(productItem).includes(productFilter));
    });

    productFilterIndex++;

    return this.getFilteredProductItems(filteredProductItems, productFilters, productFilterIndex);
  }

  
}
