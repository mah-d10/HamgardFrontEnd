import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  id;
  event;

  constructor(private route: ActivatedRoute,
              private evntsService: EventsService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.event = this.evntsService.selectedEvent;
          console.log('selected event: ');
          console.log(this.event);
        }
      );
  }

}
