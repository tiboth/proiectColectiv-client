import { Injectable } from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import { ApiService } from './api-service.service';
import {AuthUser, User} from '../shared/models/user';
import {Skill} from '../shared/models/Skill';
import {Profil} from '../shared/models/Profil';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private baseUrl = 'http://localhost:8080/';
  private currentProfileId = null;

  constructor(
    private apiService: ApiService,
    private httpClient: HttpClient
  ) {
    this.currentProfileId = sessionStorage.getItem('userId');
  }

  login(authData: AuthUser): Observable<any> {
    return this.apiService.postRequest('user/loginUser', authData);
  }

  setProfileId(userId: number) {
    const id = String(userId);
    this.currentProfileId = id;
    sessionStorage.setItem('userId', id);
  }

  getCurrentUser() {
    return this.currentProfileId;
  }

  getProfil(id: string): Observable<any> {
    return this.apiService.getRequest(`profil?profilId=${Number(id)}`);
  }

  getProfils(): Observable<Array<Profil>> {
    const url = `${this.baseUrl}profil/profils/?`;
    return this.httpClient
      .get<Array<Profil>>(url);
  }

}
