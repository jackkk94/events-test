import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ievent } from '../../../interfaces';

@Component({
  selector: 'modal-slide-description',
  templateUrl: './modal-slide-description.component.html',
  styleUrls: ['./modal-slide-description.component.less']
})
export class ModalSlideDescriptionComponent implements OnInit {
  @Input() data: Ievent;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
