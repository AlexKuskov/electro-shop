import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  constructor(public dataProvider: DataProviderService) { }

  ngOnInit() {
  }

}
