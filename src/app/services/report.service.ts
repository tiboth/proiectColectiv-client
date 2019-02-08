import { Injectable } from '@angular/core';
import {forkJoin, Observable} from 'rxjs';

import { ApiService } from './api-service.service';
import { AuthUser } from '../shared/models/user';
import {Skill} from '../shared/models/Skill';
import {HttpClient} from '@angular/common/http';
import {Report} from '../shared/models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) {
  }

  getReports(): Observable<Report[]> {
    return this.apiService.getRequest('report/findAll');
  }
}
