import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class PlacesService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  host = this.authService.host;

  places = [];

  getPlaces() {
    const hs = new HttpHeaders({Authorization: this.authService.getToken()});
    return this.http.get(this.host + '/event/api/v1/places/', {headers: hs});
  }

  search(searchString: string) {
    const hs = new HttpHeaders({Authorization: this.authService.getToken()});
    return this.http.get(this.host + '/event/api/v1/places/search', {
      params: {q: searchString}, headers: hs
    });
  }

  getPlaceIDbyIndex(index: number) {
    return 5;
    // to do
  }
}
