import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api-service.service';
import { AuthUser } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apiService: ApiService
  ) { }

  login(authData: AuthUser): Observable<any> {
    return this.apiService.postRequest('loginUser', authData);
  }

}
