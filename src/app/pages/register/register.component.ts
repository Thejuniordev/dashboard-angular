import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeInterval } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  account = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  constructor(private accountService: AccountService, private router: Router,) { }

  ngOnInit() {
  }

  async onRegister() {
    try {
      const result = await this.accountService.createAccount(this.account);
      var success = document.getElementsByClassName('success__top')[0];
      success.classList.add('this__success');

      setTimeout( () => {
        this.router.navigate(['login']);
      }, 2000);

    } catch (error) {
      console.error(error);
    }
  }

}
