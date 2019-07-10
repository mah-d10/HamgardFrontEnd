import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.css']
})
export class PlaceItemComponent implements OnInit {

  id: number;
  event;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id
            .subscribe(
              (response: any) => {
/*                this.userEmails = [];
                console.log(response);
                this.adminEmail = response.admin.email;
                for (const member of response.members) {
                  this.userEmails.push(member.email);
                }*/
              }
            );
        }
      );
  }

}
