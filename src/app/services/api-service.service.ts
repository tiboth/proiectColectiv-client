import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {share} from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiEndpoint: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiEndpoint = environment.apiEndpoint;
  }

  getRequest(path: string,  options?): Observable<any> {
    return this.http.get(`${this.apiEndpoint}/${path}`)
    .pipe(share());
  }

  postRequest(path: string,  params, options?): Observable<any> {
    return this.http.post(`${this.apiEndpoint}/${path}`, params)
    .pipe(share());
  }
}
