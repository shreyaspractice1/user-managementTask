import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: any = [];

  constructor(public dataService: DataServiceService, private _route: Router) {}

  ngOnInit() {
    this.users = this.dataService.users;
    console.log('users : ', this.users);
  }
  add() {
    this._route.navigate(['/userUpsert']);
  }

  deleteUser(user: any) {
    alert('want to delete task !');
    this.dataService.deleteUser(user);
  }

  editUser(user: any) {
    this.dataService.userData = user;
    this._route.navigate(['']);
  }
}
