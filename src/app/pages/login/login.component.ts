import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { AuthUser } from '../../shared/models/user';
import {Router} from '@angular/router';
import {isNumber} from 'util';
import {isNumeric} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    const authData = {
      username: form.value.username,
      password: form.value.password
    } as AuthUser;
    console.log(authData);

    this.loginService.login(authData).subscribe(response => {
      if (isNumeric(response)) {
        console.log('plmz');
        sessionStorage.setItem('userId', String(response));
        this.router.navigate(['profile']);
      } else {
        console.log(response);
      }

    });
  }

}
