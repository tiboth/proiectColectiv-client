import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthUser} from '../../shared/models/user';
import {LoginService} from '../../services/login.service';
import {SkillService} from '../../services/skill.service';
import {Skill} from '../../shared/models/Skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @ViewChild('f') skillForm: NgForm ;
  skills: Skill[];


  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    this.skillService.getSkills().subscribe(response => {
      this.skills = response;
      this.skillForm.reset();
    });
  }

  resetForm() {

  }

  addSkill(form: NgForm) {
    const skill = {
      skill: form.value.skill
    } as Skill;

    this.skillService.addSkill(skill).subscribe(() => {
      this.getSkills();
    });
  }

}
