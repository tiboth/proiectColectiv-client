import { Injectable } from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import { ApiService } from './api-service.service';
import {AuthUser, User} from '../shared/models/user';
import {Skill} from '../shared/models/Skill';
import {Profil} from '../shared/models/Profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(
    private apiService: ApiService
  ) { }

  login(authData: AuthUser): Observable<any> {
    return this.apiService.postRequest('user/loginUser', authData);
  }

  getProfil(id: number): Observable<Profil> {
    return this.apiService.getRequest('profil/?profilId=' + id);
  }

}
