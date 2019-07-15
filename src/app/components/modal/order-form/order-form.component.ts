import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  isOrderFormVisible: boolean;

  constructor(public modalService: ModalService) { }

  ngOnInit() {
    this.isOrderFormVisible = true;
  }

  onSubmit(isFormValid: boolean) {
    if (isFormValid) {
      this.isOrderFormVisible = false;
    }
  }

}
