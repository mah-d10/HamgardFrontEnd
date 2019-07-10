import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PlacesService} from '../places.service';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.css']
})
export class PlaceItemComponent implements OnInit {

  id: number;
  place;
  events;

  constructor(private route: ActivatedRoute,
              private plcsService: PlacesService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.place = this.plcsService.selectedPlace;
          console.log('selected place: ');
          console.log(this.place);
        }
      );

    this.plcsService.getEvents();
  }

}
