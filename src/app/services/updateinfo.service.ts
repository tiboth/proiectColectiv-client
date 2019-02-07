import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from './api-service.service';
import {forkJoin, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateinfoService {

  private baseUrl = 'http://localhost:8080/'

  constructor(private apiService: ApiService,
    private httpClient: HttpClient) { }

    getProfil(id: number): Observable<any> {
      return this.apiService.getRequest('profil/?profilId=' + id);
    }

    postProfil(profil){
      return this.httpClient.post(this.baseUrl+"/updateProfil",profil);
  }
}
