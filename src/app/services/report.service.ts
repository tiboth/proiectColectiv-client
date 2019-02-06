import { Injectable } from '@angular/core';
import {forkJoin, Observable} from 'rxjs';

import { ApiService } from './api-service.service';
import { AuthUser } from '../shared/models/user';
import {Skill} from '../shared/models/Skill';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) {
  }

  getSkills(id: number): Observable<Skill[]> {
    return this.apiService.getRequest('user/findSkills?id=' + id);
  }
}
