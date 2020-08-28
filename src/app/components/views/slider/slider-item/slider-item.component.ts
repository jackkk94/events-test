import { Component, OnInit, Input } from '@angular/core';
import { Ievent } from '../../../../interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSlideDescriptionComponent } from 'src/app/components/modals/modal-slide-description/modal-slide-description.component';
import { URL_BASE } from '../../../../utils/constants';

@Component({
  selector: 'slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.less']
})
export class SliderItemComponent implements OnInit {
  baseUrl = URL_BASE;
  @Input() model: Ievent;
  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {  }

  openModal() {
    const modalRef = this.modalService.open(ModalSlideDescriptionComponent, { size: 'lg' });
    const instance = (modalRef.componentInstance as ModalSlideDescriptionComponent);
    instance.data = this.model;
  }
}
