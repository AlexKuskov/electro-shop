import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  intervalId: number;
  slideIndex: number = 0;

  constructor() { }

  runAutoScroll(): void {
    this.intervalId = window.setInterval(() => {
      this.increaseIndex();
    }, 3200);
  }

  resetAutoScroll(): void {
    clearInterval(this.intervalId);
    this.runAutoScroll();
  }

  getSlide(): number {
    return this.slideIndex;
  }

  setSlide(slideIndex: number) {
    this.slideIndex = slideIndex;
  }

  increaseIndex(): void {
    if (this.slideIndex === 2) {
      this.slideIndex = 0;
    } else {
      this.slideIndex++;
    }
  }

  decreaseIndex(): void {
    if (this.slideIndex === 0) {
      this.slideIndex = 2;
    } else {
      this.slideIndex--;
    }
  }

  isFirstButtonChecked(): boolean {
    return this.getSlide() === 0;
  }

  isSecondButtonChecked(): boolean {
    return this.getSlide() === 1;
  }

  isThirdButtonChecked(): boolean {
    return this.getSlide() === 2;
  }
}
