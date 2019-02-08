import {LoginService} from '../services/login.service';
import {Skill} from '../shared/models/Skill';
import {SkillService} from '../services/skill.service';

export class Skills {

  constructor(private skillService: SkillService) {

  }

  getSkills(): any {
    this.skillService.getSkills().subscribe(response => {
      return response;
  });
}
}
