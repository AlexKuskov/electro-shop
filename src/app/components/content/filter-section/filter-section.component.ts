import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { CategoryContentService } from 'src/app/services/category-content.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Parameter } from 'src/app/model/parameter';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  parameters: Parameter[];

  constructor(public dataProvider: DataProviderService,
    private categoryContentService: CategoryContentService,
    private route: ActivatedRoute,
    private filterService: FilterService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.filterService.activeCategory = this.categoryContentService.getActiveCategory(params['category-title']);
      this.parameters = this.filterService.getParameters();
    });
  }

  getItemTitles(parameter: Parameter): string[] {
    return Object.keys(parameter.items);
  }

}
