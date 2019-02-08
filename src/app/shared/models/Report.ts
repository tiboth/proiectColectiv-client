import {Skill} from './Skill';

export class Report {
  id: number;
  username: string;
  skills: Skill[];
  salary: number;

  constructor(id: number, username: string, skills: Skill[], salary: number) {
    this.id = id;
    this.username = username;
    this.skills = skills;
    this.salary = salary;
  }
}
