import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginService} from '../../services/login.service';
import {AuthUser, User} from '../../shared/models/user';
import {NgForm} from '@angular/forms';
import {ReportService} from '../../services/report.service';
import {__await} from 'tslib';
import {async} from 'rxjs/internal/scheduler/async';
import {Users} from '../../subscribe/Users';
import {Report} from '../../shared/models/Report';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {


  backUsers: Report[];
  i: number;

  constructor(private reportService: ReportService) {
  }

  ngOnInit() {
      this.reportService.getReports().subscribe(response => {
      this.backUsers = response;
    });
  }




}
