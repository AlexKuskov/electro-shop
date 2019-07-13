import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { FilterService } from 'src/app/services/filter.service';
import { Parameter } from 'src/app/model/parameter';

@Component({
  selector: 'app-header-center',
  templateUrl: './header-center.component.html',
  styleUrls: ['./header-center.component.scss']
})
export class HeaderCenterComponent implements OnInit {
  @ViewChild('searchForm', {read: NgForm, static: false}) searchForm: NgForm;

  constructor(private searchService: SearchService,
              private filterService: FilterService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.searchService.searchValue = this.searchForm.form.value.q;
    this.filterService.productFilters = [];
    this.searchService.getSearchResult();
    this.searchService.parameters = this.filterService.getFilterParameters(
      this.filterService.getAllParameterItems(
        this.searchService.searchedProductItems, 
        this.searchService.categoryTitles
      ),
      new Parameter()
    );
    this.filterService.initialParametersLength = this.searchService.parameters.length;
  }

}
