import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  users: any = [];

  userData: any = {};
  username: any;
  data: any;

  constructor() {}

  count = 0;

  deleteUser(user: any) {
    let index = this.users.indexOf(user);

    let index1 = this.users.indexOf(user);
    this.users.splice(index, 1);

    console.log('removed task data : ', this.users);
  }
}
