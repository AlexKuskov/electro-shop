import { Component, OnInit, Input } from '@angular/core';
import { Parameter } from 'src/app/model/parameter';
import { FilterService } from 'src/app/services/filter.service';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  @Input()
  parameters: Parameter[];

  constructor(private filterService: FilterService,
              private dataProvider: DataProviderService) { }

  ngOnInit() {
  }

  getItemTitles(parameter: Parameter): string[] {
    return Object.keys(parameter.items);
  }

  getCheckedItemTitle(itemTitle: string) {
    let productFilters: string[] = this.filterService.productFilters;
    let productFilts: Object = {
      manufacturer: [],
      diagonal: [],
      os: [],
      screenSize: [],
      memoryCapacity: [],
      price: ''
    }

    if (productFilters.includes(itemTitle)) {
      productFilters.splice(productFilters.indexOf(itemTitle), 1);
    } else {
      productFilters.push(itemTitle);
    }
  }

}
