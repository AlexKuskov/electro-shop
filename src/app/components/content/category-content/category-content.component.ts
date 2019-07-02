import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/model/category';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.scss']
})
export class CategoryContentComponent implements OnInit {

  activeCategory: Category;

  constructor(private route: ActivatedRoute, 
    private dataProvider: DataProviderService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.setActiveCategory(params['category-title']);
    });
  }

  setActiveCategory(categoryTitle: String): void {
    for (let category of this.dataProvider.categories) {
      if (categoryTitle === category.urlPath) {
        this.activeCategory = category;
      }
    }
  }

}
