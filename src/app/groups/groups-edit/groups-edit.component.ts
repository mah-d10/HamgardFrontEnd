import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Group} from '../../shared/group.model';
import {GroupsService} from '../groups.service';

@Component({
  selector: 'app-groups-edit',
  templateUrl: './groups-edit.component.html',
  styleUrls: ['./groups-edit.component.css']
})
export class GroupsEditComponent implements OnInit {
  group: Group;
  index: number;
  id: number;
  adminEmail: string;
  userEmails: string[] = [];

  constructor(private route: ActivatedRoute,
              private grpService: GroupsService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params.index;
          this.group = this.grpService.getSelected();
          this.grpService.getUsersOfTheGroup(this.group.gID)
            .subscribe(
              (response: any) => {
                this.userEmails = [];
                console.log(response);
                this.adminEmail = response.admin.email;
                for (const member of response.members) {
                  this.userEmails.push(member.email);
                }
              }
            );
        }
      );
  }

  leaveClicked() {
    this.grpService.leaveGroup(this.group.gID)
      .subscribe(
        (response) => {
          console.log('leaveClicked resonse: ');
          console.log(response);
        }
      );
    this.grpService.groupsChanged.emit(this.grpService.groups);
    this.router.navigate(['/groups-start']);
  }
}
