import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  account = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    documentNumber: '',
    state: '',
    password: '',
    confirmPassword: '',
  }

  constructor() { }

  ngOnInit() {
  }

  onRegister() {

  }

}
