import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  account = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    documentNumber: '',
    state: '',
    password: '',
    confirmPassword: '',
  }

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  async onRegister() {
    try {
      const result = await this.accountService.createAccount(this.account);

    } catch (error) {
      console.error(error);
    }
  }

}
