import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { ProductItem } from '../model/product-item';
import { Category } from '../model/category';
import { Parameter } from '../model/parameter';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchValue: string;
  parameters: Parameter[] = [];

  searchedProductItems: ProductItem[] = [];
  categoryTitles: string[] = [];

  constructor(private dataProvider: DataProviderService,
              private filterService: FilterService) { }

  getSearchResult(): void {
    this.searchedProductItems = [];
    this.categoryTitles = [];

    this.dataProvider.categories.forEach(category => {
      this.fillSearchedProductItems(category);
    });

    this.parameters = this.filterService.getFilterParameters(
      this.filterService.getAllParameterItems(this.searchedProductItems, this.categoryTitles)
    );
  }

  fillSearchedProductItems(category: Category): void {
    category.categoryProducts.forEach(categoryProduct => {
      let lowerProductTitle: string = categoryProduct.title.toLowerCase();
      let lowerSearchValue: string = this.searchValue.toLowerCase();
      
      if(lowerProductTitle.includes(lowerSearchValue)) {
        this.searchedProductItems.push(categoryProduct);
        this.categoryTitles.push(category.title);
      }
    });
  }
}
