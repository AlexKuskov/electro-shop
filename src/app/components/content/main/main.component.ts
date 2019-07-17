import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('selectSlide', [
      state('0', style({
        transform: 'translateX(0)'
      })),
      state('1', style({
        transform: 'translateX(-100%)'
      })),
      state('2', style({
        transform: 'translateX(-200%)'
      })),
      transition('* => *', [
        animate('1s')
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  constructor(public dataProvider: DataProviderService,
              public sliderService: SliderService) { }

  ngOnInit() {
  }
}
