import { Component, OnInit } from '@angular/core';
import {EventsService} from './events.service';
import {Router} from '@angular/router';
import {computeStyle} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedEventIndex: number;
  searchString: string;
  searchBtnClicked;

  constructor(private evntsService: EventsService,
              private router: Router) {
  }

  ngOnInit() {
    this.searchBtnClicked = false;
    this.evntsService.events = [];
    this.events = [];
    this.events = this.evntsService.events;
    this.evntsService.getEvents()
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
            this.evntsService.events.push(x);
          }
        }
      );
  }

  search() {
    this.searchBtnClicked = true;
    this.evntsService.events = [];
    this.evntsService.search(this.searchString)
      .subscribe(
        (response: any[]) => {
          // console.log('search result: ' + response[0]);
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
            this.evntsService.events.push(x);
            console.log(x);
          }
        }
      );
    this.events = this.evntsService.events;
  }

  clearSearch() {
    this.searchString = '';
    this.searchBtnClicked = false;
    this.ngOnInit();
  }

  cardSelected(ri: number , ci: number) {
    const index = ri * 4 + ci;
    this.selectedEventIndex = index;
    console.log('index of the selected card is: ' + index);
    const pid = this.evntsService.getEventIDbyIndex(index);
    this.router.navigate(['/places/' + pid]);
  }
}
