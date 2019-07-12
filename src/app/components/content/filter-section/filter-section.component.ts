import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Parameter } from 'src/app/model/parameter';
import { FilterService } from 'src/app/services/filter.service';
import { CategoryContentService } from 'src/app/services/category-content.service';
import { SearchService } from 'src/app/services/search.service';
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

  constructor(private filterService: FilterService,
              private searchService: SearchService,
              private categoryContentService: CategoryContentService,
              private router: Router) { }

  ngOnInit() {
  }

  getItemTitles(parameter: Parameter): string[] {
    return Object.keys(parameter.items);
  }

  isChecked(itemTitle: string): boolean {
    return this.filterService.productFilters.some(productFilter => productFilter.includes(itemTitle));
  }

  addRemoveProductFilter(productFilter: string[], itemTitle: string): string[] {
    let currentProductFilter: string[] = productFilter;
    
    if (currentProductFilter === undefined) {
      currentProductFilter = [];
    }

    if (currentProductFilter.includes(itemTitle)) {
      currentProductFilter.splice(currentProductFilter.indexOf(itemTitle), 1);
    } else {
      currentProductFilter.push(itemTitle);
    }

    return currentProductFilter;
  }

  toggleParameterItem(itemTitle: string, parameterIndex: number): void {
    let productFilters: string[][] = this.filterService.productFilters;
    let isSearchOpened: boolean = this.isSearchPageOpened();
  
    productFilters[parameterIndex] = this.addRemoveProductFilter(productFilters[parameterIndex], itemTitle);

    this.updatePageData(isSearchOpened, productFilters, parameterIndex);
  }

  updateFilterParameters(isSearchOpened: boolean, parameterIndex: number) {
    let searchParameter: Parameter;
    let categoryContentParameter: Parameter;

    // -10 is random number. Used just to distinguish from normal parameterIndex
    if (parameterIndex === -10) {
      searchParameter = new Parameter();
      categoryContentParameter = new Parameter();
    } else {
      searchParameter = this.searchService.parameters[parameterIndex];
      categoryContentParameter = this.parameters[parameterIndex];
    }
  
    if (isSearchOpened) {
      this.searchService.parameters = this.filterService.getFilterParameters(
        this.filterService.getAllParameterItems(
          this.searchService.filteredSearchProductItems, 
          this.searchService.categoryTitles
        ),
        searchParameter
      );
    } else {
      this.parameters = this.filterService.getFilterParameters(
        this.filterService.getAllParameterItems(this.categoryContentService.productItems, []),
        categoryContentParameter
      );
    }
  }

  updateProductItems(isSearchOpened: boolean, productFilters: string[][]) {
    productFilters = productFilters.filter(value => !!value && value.length);
    
    if (isSearchOpened) {
      this.searchService.filteredSearchProductItems = this.filterService.getFilteredProductItems(
        this.searchService.searchedProductItems, 
        productFilters,
        0
      );
    } else {
      this.categoryContentService.productItems = this.filterService.getFilteredProductItems(
        this.categoryContentService.activeCategory.categoryProducts, 
        productFilters,
        0
      );
    }
  }

  isSearchPageOpened(): boolean {
    if (this.router.url.includes('search')) {
      return true;
    } else if (this.router.url.includes('category')) {
      return false;
    }
  }

  setPriceRangeProductFilter(): void {
    this.filterService.productFilters[this.filterService.initialParametersLength] = 
    [
      this.minPrice.nativeElement.value, 
      this.maxPrice.nativeElement.value
    ];
  }

  updatePageData(isSearchOpened: boolean, productFilters: string[][], parameterIndex: number): void {
    this.setPriceRangeProductFilter();
    this.updateProductItems(isSearchOpened, productFilters);
    this.updateFilterParameters(isSearchOpened, parameterIndex);
  }

}
