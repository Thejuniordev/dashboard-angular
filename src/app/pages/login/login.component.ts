import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  };

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

    ngOnInit() {}

    async onSubmit() {
      try {
        const result = await this.accountService.login(this.login);
        console.log(`Login efetuado: ${result}`);

        this.router.navigate(['dashboard']);
      } catch (error) {
        console.error(error)
      }
    }

}
