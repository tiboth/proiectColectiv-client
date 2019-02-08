import {LoginService} from '../services/login.service';
import {Skill} from '../shared/models/Skill';
import {SkillService} from '../services/skill.service';
import {User} from '../shared/models/user';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Users {

  u: User[] = null;
  constructor(private userService: LoginService) {
  }

  getUsers(): User[] {
    this.userService.getUsers().subscribe(response => {
      console.log(response);
      this.u = response;
    });
    return this.u;
  }
}
