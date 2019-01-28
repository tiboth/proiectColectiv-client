import { Injectable } from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import { ApiService } from './api-service.service';
import {AuthUser, User} from '../shared/models/user';
import {Skill} from '../shared/models/Skill';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apiService: ApiService
  ) { }

  login(authData: AuthUser): Observable<any> {
    return this.apiService.postRequest('user/loginUser', authData);
  }

  getUsers(): Observable<User[]> {
    return this.apiService.getRequest('user/findAll');
  }

  getSkills(id: number): Observable<Skill[]> {
    return this.apiService.getRequest('user/findSkills?id=' + id);
  }

}
