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
  selectedPlaceIndex: number;

  constructor(private plcsService: PlacesService,
              private router: Router) { }

  ngOnInit() {
    this.plcsService.places = [];
    this.places = [];
    this.plcsService.getPlaces()
      .subscribe(
        (response: any[]) => {
          for (let i = 0; i < response.length; i += 4) {
            const x = [];
            if (response[i] !== undefined) {
              x.push(response[i]);
            }
            if (response[i + 1] !== undefined) {
              x.push(response[i + 1]);
            }
            if (response[i + 2] !== undefined) {
              x.push(response[i + 2]);
            }
            if (response[i + 3] !== undefined) {
              x.push(response[i + 3]);
            }
            this.plcsService.places.push(x);
          }
        }
      );
    this.places = this.plcsService.places;
  }

  cardSelected(ri: number , ci: number) {
    const index = ri * 4 + ci + 1;
    this.selectedPlaceIndex = index;
    console.log('index of the selected card is: ' + index);
    const pid = this.plcsService.getPlaceIDbyIndex(index);
    this.router.navigate(['/places/' + pid]);
  }
}
