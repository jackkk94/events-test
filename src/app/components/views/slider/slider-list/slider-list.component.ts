import { Component, OnInit, Input } from '@angular/core';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { Ievent } from '../../../../interfaces';

@Component({
  selector: 'slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.less']
})
export class SliderListComponent implements OnInit {
  @Input() model: Ievent[];

  constructor() { }

  ngOnInit() {}

  onSlide(slideEvent: NgbSlideEvent) {}

}
