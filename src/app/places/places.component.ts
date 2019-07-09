import { Component, OnInit } from '@angular/core';
import {PlacesService} from './places.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  transformedPlaces = [];
  selectedPlaceIndex: number;
  constructor(private plcsService: PlacesService,
              private router: Router) { }

  ngOnInit() {
    /*    this.plcsService.places = [];
        this.plcsService.getPlaces();
        this.places = this.plcsService.places;*/
    this.transformedPlaces = this.transform();
  }

  transform() {
    const transformedPlaces = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.places.length; i += 4) {
      const x = [];
      if (this.places[i] !== undefined) {
        x.push(this.places[i]);
      }
      if (this.places[i + 1] !== undefined) {
        x.push(this.places[i + 1]);
      }
      if (this.places[i + 2] !== undefined) {
        x.push(this.places[i + 2]);
      }
      if (this.places[i + 3] !== undefined) {
        x.push(this.places[i + 3]);
      }
      transformedPlaces.push(x);
    }
    return transformedPlaces;
  }

  cardSelected(ri: number , ci: number) {
    const index = ri * 4 + ci + 1;
    this.selectedPlaceIndex = index;
    console.log('index of the selected card is: ' + index);

    const pid = this.plcsService.getPlaceIDbyIndex(index);
    this.router.navigate(['/places/' + pid]);
  }
}
