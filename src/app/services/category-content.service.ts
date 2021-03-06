import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { Category } from '../models/category';
import { ProductItem } from '../models/product-item';

@Injectable({
  providedIn: 'root'
})
export class CategoryContentService {

  activeCategory: Category = this.dataProvider.categories[0];
  productItems: ProductItem[] = this.activeCategory.categoryProducts;

  constructor(private dataProvider: DataProviderService) { }

  getActiveCategory(categoryTitle: string): Category {
    for (let category of this.dataProvider.categories) {
      if (categoryTitle === category.urlPath) {
        return category;
      }
    }
  }

  setCategoryProductItems() {
    if (localStorage.getItem('categoryProductItems')) {
      this.productItems = JSON.parse(localStorage.getItem('categoryProductItems'));
    }
  }

  removeCategoryContentSavedSettings() {
    localStorage.removeItem('productFilters');
    localStorage.removeItem('categoryProductItems');
    localStorage.removeItem("parameters");
  }
}
