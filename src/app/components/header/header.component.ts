import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public modalService: ModalService,
              public cartService: CartService) { }

  ngOnInit() {
  }

}
