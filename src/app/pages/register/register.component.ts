import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault();
    const errors = [];
    const target = event.target;
    const user = target.querySelector('#email').value;
    const pass = target.querySelector('#pass').value;
    const confirmpass = target.querySelector('#confirmpass').value;

    if (pass != confirmpass) {
      errors.push("As senhas não estão iguais");
      console.log('Error de senha')
    }

    if (errors.length > 0) {
    }
  }

}
