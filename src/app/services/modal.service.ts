import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible: boolean;

  constructor() { }

  closeModal() {
    this.isVisible = false;
  }

  openModal() {
    this.isVisible = true;
  }
}
