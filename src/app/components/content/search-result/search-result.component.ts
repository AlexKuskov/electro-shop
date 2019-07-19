import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor(public searchService: SearchService,
              private filterService: FilterService) { }

  ngOnInit() {
    this.searchService.setSearchResultSettings();

    this.filterService.initialParametersLength = +localStorage.getItem('initialParametersLength');

    if (localStorage.getItem('productFilters')) {
      let savedProductFilters: string[][] = JSON.parse(localStorage.getItem('productFilters'));

      savedProductFilters.forEach((productFilter, index) => {
        if (productFilter) this.filterService.productFilters[index] = productFilter;
      });
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('initialParametersLength');
    localStorage.removeItem('productFilters');
    localStorage.removeItem('searchFilterParameters');
    localStorage.removeItem('searchValue');
    localStorage.removeItem('filteredSearchProductItems');
    localStorage.removeItem('searchedProductItems');
    localStorage.removeItem('parameters');
  }

}
