import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {GroupsService} from '../groups.service';

@Component({
  selector: 'app-groups-new',
  templateUrl: './groups-new.component.html',
  styleUrls: ['./groups-new.component.css']
})
export class GroupsNewComponent implements OnInit {

  constructor(private grpService: GroupsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const u1Email = form.value.u1;
    const u2Email = form.value.u2;
    const u3Email = form.value.u3;
    this.grpService.createGroup(name, u1Email, u2Email, u3Email)
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

}
