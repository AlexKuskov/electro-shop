import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryContentService {

  constructor(private dataProvider: DataProviderService) { }

  getActiveCategory(categoryTitle: string): Category {
    for (let category of this.dataProvider.categories) {
      if (categoryTitle === category.urlPath) {
        return category;
      }
    }
  }
}
