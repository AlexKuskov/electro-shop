import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { ProductItem } from '../model/product-item';
import { Category } from '../model/category';
import { Parameter } from '../model/parameter';
import { FilterService } from './filter.service';
import { CategoryContentService } from './category-content.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchValue: string;
  parameters: Parameter[] = [];

  searchedProductItems: ProductItem[] = [];
  filteredSearchProductItems: ProductItem[] = this.searchedProductItems;
  categoryTitles: string[] = [];

  constructor(private dataProvider: DataProviderService,
              private filterService: FilterService,
              private categoryContentService: CategoryContentService) { }

  getSearchResult(): void {
    this.searchedProductItems = [];
    this.categoryTitles = [];
    this.filterService.productFilters = [];
    this.categoryContentService.productItems = [];
    this.filteredSearchProductItems = this.searchedProductItems;

    this.dataProvider.categories.forEach(category => {
      this.fillSearchedProductItems(category);
    });

    this.parameters = this.filterService.getFilterParameters(
      this.filterService.getAllParameterItems(this.searchedProductItems, this.categoryTitles),
      new Parameter()
    );

    this.filterService.initialParametersLength = this.parameters.length;
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
