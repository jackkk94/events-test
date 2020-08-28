import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { Ievent, IdateItem } from '../../../interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit, OnDestroy {
  eventsList: Ievent[] = [];

  constructor(
    private service: MainService,
  ) { }

  ngOnInit() {
    this.initEvents();
  }


  initEvents() {
    this.service.getEvents().then(events => events.forEach(result => {
      result.events.forEach(el => {
        const data = this.eventsList.find(i => i.uuid === el.uuid);
        if (!data) {
          el.dateArray = [el.NearestSchedule.begin_time];
          this.eventsList.push(el);
        } else {
          data.dateArray.push(el.NearestSchedule.begin_time);
        }
      });
    }));
  }

  ngOnDestroy() { }

}
