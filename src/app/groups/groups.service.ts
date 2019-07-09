import {Group} from '../shared/group.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class GroupsService {
  host = 'http://192.168.43.124:8001';
  public selectedIndex: number;

  constructor(private  router: Router,
              private  http: HttpClient,
              private  authService: AuthService) {
  }

  public groupSelected = new EventEmitter<Group>();

  groups: Group[] = [];

  public getGroups() {
    const hs = new HttpHeaders({Authorization: this.authService.getToken()});
    return this.http.get(this.host + '/group/api/v1/groups/', { headers: hs});
  }

  public getGroup(index: number) {
    return this.groups[index];
  }

  public createGroup(n: string, email1: string, email2: string, email3: string, sum: string) {
    const hs = new HttpHeaders({Authorization: this.authService.getToken()});
    return this.http.post(this.host + '/group/api/v1/create_group/', {
      name: n,
      emails: [email1, email2, email3],
      summary: sum
    }, { headers: hs});
    this.router.navigate(['/']);
  }

  public getUsersOfTheGroup(gid: number) {
    const hs = new HttpHeaders({Authorization: this.authService.getToken()});
    return this.http.get(this.host + '/group/api/v1/members/' + gid + '/', {headers: hs});
  }

  public leaveGroup(gid: number) {
    const hs = new HttpHeaders({Authorization: this.authService.getToken()});
    return this.http.post(this.host + '/api/groups/leave/', { group_id: gid}, {headers: hs});
  }

/*  public getIDbyIndex(index: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].gID === index) {
        console.log('found');
        return this.groups[i].gID;
      }
    }
  }*/

  public addGroup(g) {
    const obj = new Group(g.id, g.name, g.admin_id, g.members_count, g.admin_email, null);
    this.groups.push(obj);
    console.log('added new groups to list: ' + obj);
  }

  public getSelected() {
    return this.getGroup(this.selectedIndex);
  }
}
