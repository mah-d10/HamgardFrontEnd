import {User} from './user.model';

export class Group {
  public gID: number;
  public name: string;
  public adminID: string;
  public users: User[];
  public userCount: number;
  public adminEmail: string;
  public summary: string;


  constructor(gid, name, adminID, uCount, adminEmail, users, summary) {
    this.gID = gid;
    this.name = name;
    this.adminID = adminID;
    this.users = users;
    this.userCount = uCount;
    this.adminEmail = adminEmail;
    this.summary = summary;
  }
}
