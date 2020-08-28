import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSlideDescriptionComponent } from '../components/modals/modal-slide-description/modal-slide-description.component';
import { URL_SETTINGS, URL_EVENTS } from '../utils/constants';
import { Ievent, IdateItem } from '../interfaces';

@Injectable()
export class MainService {

  private _token: string;

  @Output() treeChange = new EventEmitter<void>();

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  open(event: any) {
    const modalRef = this.modalService.open(ModalSlideDescriptionComponent);
    modalRef.componentInstance.Model = event;
  }


  private _getSettings(): Promise<any> {
    return this.http.get(URL_SETTINGS, { observe: 'response' }).toPromise<any>();
  }

  private _getEventsList(token: string): Promise<IdateItem[]> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get(URL_EVENTS, { headers }).toPromise() as Promise<IdateItem[]>;
  }

  getEvents(): Promise<IdateItem[]> {
    if (!this._token) {
      return this._getSettings()
        .then(result => {
          const token = result.headers.get('x-auth-token');
          if (token) {
            this._token = token;
            window.localStorage.setItem('zapomniToken', token);
            return token;
          }
          throw new Error('get settings error');
        })
        .then((token) => {
          return this._getEventsList(token);
        })
        .catch(e => {
          alert(e);
          return e;
        });
    } else {
      return this._getEventsList(this._token);
    }
  }

}



