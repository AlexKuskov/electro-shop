import { Component, OnInit, Input } from '@angular/core';
import { Parameter } from 'src/app/model/parameter';
import { FilterService } from 'src/app/services/filter.service';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { CategoryContentService } from 'src/app/services/category-content.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  @Input()
  parameters: Parameter[];

  constructor(private filterService: FilterService,
              private dataProvider: DataProviderService,
              private categoryContentService: CategoryContentService) { }

  ngOnInit() {
  }

  getItemTitles(parameter: Parameter): string[] {
    return Object.keys(parameter.items);
  }

  getCheckedItemTitle(itemTitle: string, parameterIndex: number) {
    //TODO: divide this method
    let productFilters: string[][] = this.filterService.productFilters;

    if (productFilters[parameterIndex] === undefined) {
      productFilters[parameterIndex] = [];
    }

    let currentProductFilter: string[] = productFilters[parameterIndex];

    if (currentProductFilter.includes(itemTitle)) {
      currentProductFilter.splice(currentProductFilter.indexOf(itemTitle), 1);
    } else {
      currentProductFilter.push(itemTitle);
    }

    productFilters = productFilters.filter(value => !!value && value.length);
    
    this.categoryContentService.productItems = this.filterService.getFilteredProductItems(
      this.dataProvider.laptops, 
      productFilters,
      0
    );
  }

}
