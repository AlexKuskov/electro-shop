import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('selectSlide', [
      state('firstSlide', style({
        right: 0
      })),
      state('secondSlide', style({
        right: '100%'
      })),
      state('thirdSlide', style({
        right: '200%'
      })),
      transition('* => *', [
        animate('0.8s')
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  slideIndex: String = 'firstSlide';

  constructor(public dataProvider: DataProviderService) { }

  ngOnInit() {
  }

  getSlide(): String {
    return this.slideIndex;
  }

  setSlide(slideIndex: String) {
    this.slideIndex = slideIndex;
  }

}
