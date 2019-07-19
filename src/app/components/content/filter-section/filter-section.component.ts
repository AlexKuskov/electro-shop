import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Parameter } from 'src/app/model/parameter';
import { FilterService } from 'src/app/services/filter.service';
import { Router } from '@angular/router';

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

  constructor(public filterService: FilterService,
              private router: Router) { }

  ngOnInit() {
    
  }

  updateFilterServicePriceValues() {
    this.filterService.minPrice = this.minPrice.nativeElement.value;
    this.filterService.maxPrice = this.maxPrice.nativeElement.value;
  }

  getItemTitles(parameter: Parameter): string[] {
    return Object.keys(parameter.items);
  }

  isChecked(itemTitle: string): boolean {
    return this.filterService.productFilters.some(productFilter => productFilter.includes(itemTitle));
  }

  toggleParameterItem(itemTitle: string, parameterIndex: number): void {
    let productFilters: string[][] = this.filterService.productFilters;
    let isSearchOpened: boolean = this.isSearchPageOpened();
    productFilters[parameterIndex] = this.filterService.addRemoveProductFilter(productFilters[parameterIndex], itemTitle);

    this.updatePageData(isSearchOpened, productFilters, parameterIndex);  
    
    localStorage.setItem("parameters", JSON.stringify(this.parameters));
    localStorage.setItem("productFilters", JSON.stringify(productFilters));
  }

  isSearchPageOpened(): boolean {
    if (this.router.url.includes('search')) {
      return true;
    } else if (this.router.url.includes('category')) {
      return false;
    }
  }

  updatePageData(isSearchOpened: boolean, productFilters: string[][], parameterIndex: number): void {
    this.filterService.parameters = this.parameters;
    this.updateFilterServicePriceValues();
    this.filterService.setPriceRangeProductFilter();
    this.filterService.updateProductItems(isSearchOpened, productFilters);
    this.filterService.updateFilterParameters(isSearchOpened, parameterIndex);
    this.parameters = this.filterService.parameters;
  }
}
