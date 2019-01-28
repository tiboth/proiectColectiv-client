import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api-service.service';
import { AuthUser } from '../shared/models/user';
import {Skill} from '../shared/models/Skill';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private apiService: ApiService
  ) { }

}
