import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Parameter } from 'src/app/model/parameter';
import { FilterService } from 'src/app/services/filter.service';
import { CategoryContentService } from 'src/app/services/category-content.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  @ViewChild('minPrice', {read: ElementRef, static: false }) minPrice: ElementRef;
  @ViewChild('maxPrice', {read: ElementRef, static: false }) maxPrice: ElementRef;

  @Input()
  parameters: Parameter[];

  productFilters: string[][] = this.filterService.productFilters;

  constructor(private filterService: FilterService,
              private categoryContentService: CategoryContentService) { }

  ngOnInit() {
  }

  getItemTitles(parameter: Parameter): string[] {
    return Object.keys(parameter.items);
  }

  getCheckedItemTitle(itemTitle: string, parameterIndex: number) {
    //TODO: divide this method
    this.productFilters = this.filterService.productFilters;
    

    if (this.productFilters[parameterIndex] === undefined) {
      this.productFilters[parameterIndex] = [];
    }

    let currentProductFilter: string[] = this.productFilters[parameterIndex];

    if (currentProductFilter.includes(itemTitle)) {
      currentProductFilter.splice(currentProductFilter.indexOf(itemTitle), 1);
    } else {
      currentProductFilter.push(itemTitle);
    }

    this.addPriceRangeParameter();
    
    this.productFilters = this.productFilters.filter(value => !!value && value.length);

    this.categoryContentService.productItems = this.filterService.getFilteredProductItems(
      this.categoryContentService.activeCategory.categoryProducts, 
      this.productFilters,
      0
    );
  }

  addPriceRangeParameter() {
    this.filterService.productFilters[this.parameters.length] = 
    [
      this.minPrice.nativeElement.value, 
      this.maxPrice.nativeElement.value
    ];

    this.productFilters = this.filterService.productFilters;
    this.productFilters = this.productFilters.filter(value => !!value && value.length);
 
    this.categoryContentService.productItems = this.filterService.getFilteredProductItems(
      this.categoryContentService.activeCategory.categoryProducts, 
      this.productFilters,
      0
    );
  }

}
