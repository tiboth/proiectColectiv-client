import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import { LoginService } from '../../services/login.service';
import { AuthUser } from '../../shared/models/user';
import {ToastrService} from 'ngx-toastr';
import { ProfilService } from 'src/app/services/profil.service';

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
    private toastr: ToastrService,
    private profilService: ProfilService,
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
      console.log(response);
      const userId = Number(response);
      if (!Number.isNaN(userId)) {
        this.toastr.success('Logged in');
        this.profilService.setProfileId(userId);
        this.router.navigate(['profile']);
      } else {
        this.toastr.error('Erro loggin in');
      }
    });
  }

}
