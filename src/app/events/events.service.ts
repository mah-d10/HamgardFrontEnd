import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class EventsService {

  selectedEvent;

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  host = this.authService.host;

  events = [];

  getEvents() {
    const hs = new HttpHeaders({Authorization: this.authService.getToken()});
    return this.http.get(this.host + '/event/api/v1/events/search', {
      params: {q: ''}
    });
  }

  search(searchString: string) {
    const hs = new HttpHeaders({Authorization: this.authService.getToken()});
    return this.http.get(this.host + '/event/api/v1/places/search', {
      params: {q: searchString}
    });
  }

  storeSelected(ri: number, ci: number) {
    this.selectedEvent = this.events[ri][ci];
    console.log(this.selectedEvent);
  }

}
