import { Directive, HostListener } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';

@Directive({
  selector: '[sliderButton]'
})
export class SliderButtonDirective {
  
  constructor(public sliderService: SliderService) { }

  @HostListener('click')
  onClick() {
    this.sliderService.resetAutoScroll();
  }
}
