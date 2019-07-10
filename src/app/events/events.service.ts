import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class EventsService {

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

  getEventIDbyIndex(index: number) {
    return 5;
    // to do
  }
}
