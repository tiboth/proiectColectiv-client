import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginService} from '../../services/login.service';
import {AuthUser, User} from '../../shared/models/user';
import {NgForm} from '@angular/forms';
import {ReportService} from '../../services/report.service';
import {__await} from 'tslib';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {


  backUsers: User[];
  i: number;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
      this.loginService.getUsers().subscribe(response => {
      this.backUsers = response;
    });
    console.log(this.backUsers);
    // this.backUsers.forEach(function (value) {
    //   this.reportService.getSkills(value.id).subscribe(response => {
    //     console.log(response);
    //   });
    //   console.log(value);
    // });
  }




}
