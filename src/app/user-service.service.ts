import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from './shared/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService { 
  private urlConfig="http://localhost:8080/user";

  constructor(private http:HttpClient) { }

  getUser(id:number){
    return this.http.get(this.urlConfig+"/findById/"+id);
  }
  postUser(user){
    return this.http.post(this.urlConfig+"/updateUser",user);
  }
}
