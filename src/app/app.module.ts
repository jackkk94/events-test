import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { MainService } from './services/main.service';
import { ModalSlideDescriptionComponent } from './components/modals/modal-slide-description/modal-slide-description.component';
import { SliderListComponent } from './components/views/slider/slider-list/slider-list.component';
import { SliderItemComponent } from './components/views/slider/slider-item/slider-item.component';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MainPageComponent,
    ModalSlideDescriptionComponent,
    SliderListComponent,
    SliderItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule
  ],
  entryComponents: [ModalSlideDescriptionComponent],
  providers: [MainService],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
