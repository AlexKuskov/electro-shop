import { Injectable } from '@angular/core';
import { Parameter } from '../models/parameter';
import { ProductItem } from '../models/product-item';
import { DataProviderService } from './data-provider.service';
import { CategoryContentService } from './category-content.service';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  productFilters: string[][] = [];
  initialParametersLength: number;
  
  parameters: Parameter[];
  minPrice: string;
  maxPrice: string;

  constructor(public dataProvider: DataProviderService,
              private categoryContentService: CategoryContentService,
              private searchService: SearchService) { }

  getAllParameterItems(categoryProducts: ProductItem[], categoryTitles: string[]): string[][] {
    let items: string[][] = [];

    items.push(categoryTitles);
    items.push(categoryProducts.map(categoryProduct => categoryProduct.manufacturer));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.diagonal));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.os));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.screenSize));
    items.push(categoryProducts.map(categoryProduct => categoryProduct.memoryCapacity));

    return items;
  }

  getFilterParameters(items: string[][], lastChangedParameter: Parameter): Parameter[] {
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

  getFilteredProductItems(productItems: ProductItem[], productFilters: string[][], productFilterIndex: number): ProductItem[] {
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

  setPriceRangeProductFilter(): void {
    this.productFilters[this.initialParametersLength] = 
    [
      this.minPrice,
      this.maxPrice
    ];
  }

  updateProductItems(isSearchOpened: boolean, productFilters: string[][]): void {
    productFilters = productFilters.filter(value => !!value && value.length);
    
    if (isSearchOpened) {
      this.searchService.filteredSearchProductItems = this.getFilteredProductItems(
        this.searchService.searchedProductItems, 
        productFilters,
        0
      );
      localStorage.setItem("filteredSearchProductItems", JSON.stringify(this.searchService.filteredSearchProductItems));
    } else {
      this.categoryContentService.productItems = this.getFilteredProductItems(
        this.categoryContentService.activeCategory.categoryProducts, 
        productFilters,
        0
      );
      localStorage.setItem("categoryProductItems", JSON.stringify(this.categoryContentService.productItems));
    }
  }

  updateFilterParameters(isSearchOpened: boolean, parameterIndex: number): void {
    let searchParameter: Parameter;
    let categoryContentParameter: Parameter;

    // -10 is random number. Used just to distinguish from normal parameterIndex
    if (parameterIndex === -10) {
      searchParameter = new Parameter();
      categoryContentParameter = new Parameter();
    } else {
      searchParameter = this.searchService.parameters[parameterIndex];
      categoryContentParameter = this.parameters[parameterIndex];
    }
  
    if (isSearchOpened) {
      this.searchService.parameters = this.getFilterParameters(
        this.getAllParameterItems(
          this.searchService.filteredSearchProductItems, 
          this.searchService.categoryTitles
        ),
        searchParameter
      );
      localStorage.setItem('searchFilterParameters', JSON.stringify(this.searchService.parameters));
    } else {
      this.parameters = this.getFilterParameters(
        this.getAllParameterItems(this.categoryContentService.productItems, []),
        categoryContentParameter
      );
    }
  }

  addRemoveProductFilter(productFilter: string[], itemTitle: string): string[] {
    let currentProductFilter: string[] = productFilter;
    
    if (currentProductFilter === undefined) {
      currentProductFilter = [];
    }

    if (currentProductFilter.includes(itemTitle)) {
      currentProductFilter.splice(currentProductFilter.indexOf(itemTitle), 1);
    } else {
      currentProductFilter.push(itemTitle);
    }

    return currentProductFilter;
  }

  setProductFilters() {
    if (localStorage.getItem('productFilters')) {
      let savedProductFilters: string[][] = JSON.parse(localStorage.getItem('productFilters'));

      savedProductFilters.forEach((productFilter, index) => {
        if (productFilter) this.productFilters[index] = productFilter;
      });
    }
  }
}
