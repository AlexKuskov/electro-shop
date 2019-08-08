import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryContentService } from 'src/app/services/category-content.service';
import { Parameter } from 'src/app/models/parameter';
import { FilterService } from 'src/app/services/filter.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.scss']
})
export class CategoryContentComponent implements OnInit {

  activeCategoryTitle: string;
  parameters: Parameter[];

  constructor(private route: ActivatedRoute,
    public categoryContentService: CategoryContentService,
    private filterService: FilterService,
    private searchService: SearchService) { }

  ngOnInit() {
    let categoryTitle: string;

    this.route.params.subscribe((params: Params) => {
      let activeCategory: Category = this.categoryContentService.getActiveCategory(params['category-title']);
      this.categoryContentService.activeCategory = activeCategory;
      this.activeCategoryTitle = activeCategory.title;
      this.categoryContentService.productItems = activeCategory.categoryProducts;

      this.parameters = this.filterService.getFilterParameters(
        this.filterService.getAllParameterItems(this.categoryContentService.productItems, []),
        new Parameter()
      );
      
      this.filterService.productFilters = [];
      this.filterService.initialParametersLength = this.parameters.length;
      this.searchService.filteredSearchProductItems = [];

      if (!categoryTitle) this.setSavedSettings();
      categoryTitle = params['category-title'];

      this.categoryContentService.removeCategoryContentSavedSettings();
    });
  }

  setSavedSettings() {
    this.categoryContentService.setCategoryProductItems();

    if (localStorage.getItem('parameters')) {
      this.parameters = JSON.parse(localStorage.getItem('parameters'));
    }

    this.filterService.setProductFilters();
  }
}
