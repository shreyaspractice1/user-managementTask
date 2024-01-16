import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css'],
})
export class UserUpsertComponent {
  myForm!: FormGroup;
  empData2: any;
  constructor(private dataService: DataServiceService, private _route: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.myForm.setValue(this.dataService.userData);
  }

  onSubmit() {
    console.log('My form value : ', this.myForm.value);
    console.log('users onSubmit : ', this.users);

    let count = 0;
    for (let i = 0; i < this.dataService.users.length; i++) {
      if (
        this.dataService.users[i].hasOwnProperty('email') &&
        this.dataService.users[i].email == this.dataService.userData.email
      ) {
        this.dataService.users[i] = this.myForm.value;
        count++;
      }
    }
    if (count == 0) {
      this.dataService.users.push(this.myForm.value);
    }

    this._route.navigate(['/userList']);
  }

  createForm() {
    this.myForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      email: new FormControl('', [Validators.email]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^[0-9]{10}$'),
      ]),
    });
  }

  users: any[] = [];

  search() {}
}
