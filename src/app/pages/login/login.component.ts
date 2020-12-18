import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
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

  formulario: FormGroup;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

    ngOnInit() {
      this.formulario = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required]
      })
    }

    async onSubmit() {
      try {
        const result = await this.accountService.login(this.login);
        console.log(`Login efetuado: ${result}`);

        this.router.navigate(['dashboard']);
      } catch (error) {
        console.error(error);
        var erro = document.getElementsByClassName('error__top')[0];
        erro.classList.add('this__error');
      }
    }


    verificaValidTouched(campo) {
      return !this.formulario.get(campo).valid && this.formulario.get(campo).touched
    }

    aplicationCssError(campo) {
      return {
        'has-error': this.verificaValidTouched(campo),
        'has-feedback': this.verificaValidTouched(campo),
      }
    }

}
