import {Skill} from './Skill';

export class AuthUser {
  id: number;
  username: string;
  password: string;
  email: string;

  constructor(id: number, username: string, password: string, email: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
  }
}


export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  salary: number;
  skills: Skill[];


  constructor(id: number, username: string, password: string, email: string, salary: number, skills: Skill[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.salary = salary;
    this.skills = skills;
  }

}
