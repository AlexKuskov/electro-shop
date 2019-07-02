import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modalFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s', style({ opacity: 0 }))
      ])
    ]),
    trigger('modalBackgroundFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s', style({ opacity: 0.5 }))
      ]),
      transition(':leave', [
        style({ opacity: 0.5 }),
        animate('0.2s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

}
