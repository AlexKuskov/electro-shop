import { Component, OnInit, Input } from '@angular/core';
import { Parameter } from 'src/app/model/parameter';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  @Input()
  parameters: Parameter[];

  constructor() { }

  ngOnInit() {
  }

  getItemTitles(parameter: Parameter): string[] {
    return Object.keys(parameter.items);
  }

}
