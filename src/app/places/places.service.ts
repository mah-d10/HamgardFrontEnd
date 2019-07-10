import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class PlacesService {

  selectedPlace;

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  host = this.authService.host;

  places = [];

  getPlaces() {
    const hs = new HttpHeaders({Authorization: this.authService.getToken()});
    return this.http.get(this.host + '/event/api/v1/places/');
  }

  search(searchString: string) {
    const hs = new HttpHeaders({Authorization: this.authService.getToken()});
    return this.http.get(this.host + '/event/api/v1/places/search', {
      params: {q: searchString}
    });
  }

  storeSelected(ri: number, ci: number) {
    this.selectedPlace = this.places[ri][ci];
  }

  getEvents() {
    //
  }
}
