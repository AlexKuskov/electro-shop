import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { ProductItem } from '../model/product-item';
import { Category } from '../model/category';
import { Parameter } from '../model/parameter';
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
              private categoryContentService: CategoryContentService) { }

  getSearchResult(): void {
    this.searchedProductItems = [];
    this.categoryTitles = [];
    this.categoryContentService.productItems = [];
    this.filteredSearchProductItems = this.searchedProductItems;

    this.dataProvider.categories.forEach(category => {
      this.fillSearchedProductItems(category);
    });
    
    localStorage.setItem("searchValue", this.searchValue);
    localStorage.setItem("categoryTitles", JSON.stringify(this.categoryTitles));
    localStorage.setItem("filteredSearchProductItems", JSON.stringify(this.filteredSearchProductItems));
    localStorage.setItem("searchedProductItems", JSON.stringify(this.searchedProductItems));
    
    this.categoryContentService.removeCategoryContentSavedSettings();
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

  setSearchResultSettings() {
    if (localStorage.getItem('searchFilterParameters')) {
      this.categoryTitles = JSON.parse(localStorage.getItem('categoryTitles'));
      this.filteredSearchProductItems = JSON.parse(localStorage.getItem('filteredSearchProductItems'));
      this.searchedProductItems = JSON.parse(localStorage.getItem('searchedProductItems'));
      this.parameters = JSON.parse(localStorage.getItem('searchFilterParameters'));
    }
  }
}
