import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import {
  trigger,
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
      transition(':enter', [
        style({ opacity: 0}),
        animate('1s', style({ opacity: 1}))
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
