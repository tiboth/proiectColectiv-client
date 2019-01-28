import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api-service.service';
import {AuthUser} from '../shared/models/user';
import {Skill} from '../shared/models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private apiService: ApiService
  ) {}

  getSkills(): Observable<Skill[]> {
    return this.apiService.getRequest('skill/findAll');
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.apiService.postRequest('skill/save', skill);
  }
}
