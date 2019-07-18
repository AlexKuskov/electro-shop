import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  windowScrolled: boolean;

  constructor(private sliderService: SliderService,
              private cartService: CartService) { }

  ngOnInit() {
    this.sliderService.runAutoScroll();
    if (localStorage.getItem('cartItems')) {
      this.cartService.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.windowScrolled = true;
    } 
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }
    })();
  }

}
