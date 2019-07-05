import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryContentService } from 'src/app/services/category-content.service';
import { Parameter } from 'src/app/model/parameter';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.scss']
})
export class CategoryContentComponent implements OnInit {

  activeCategory: Category;
  parameters: Parameter[];

  constructor(private route: ActivatedRoute,
    private categoryContentService: CategoryContentService,
    private filterService: FilterService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.activeCategory = this.categoryContentService.getActiveCategory(params['category-title']);
      this.parameters = this.filterService.getFilterParameters(
        this.filterService.getAllParameterItems(this.activeCategory.categoryProducts, [])
      );
    });
  }
}
