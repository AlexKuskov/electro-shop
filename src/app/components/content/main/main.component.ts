import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';

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

  slideIndex: number = 0;

  constructor(public dataProvider: DataProviderService) { }

  ngOnInit() {
  }

  getSlide(): number {
    return this.slideIndex;
  }

  setSlide(slideIndex: number) {
    this.slideIndex = slideIndex;
  }

  increaseIndex() {
    if (this.slideIndex === 2) {
      this.slideIndex = 0;
    } else {
      this.slideIndex++;
    }
  }

  decreaseIndex() {
    if (this.slideIndex === 0) {
      this.slideIndex = 2;
    } else {
      this.slideIndex--;
    }
  }

}
