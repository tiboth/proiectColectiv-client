import { Component, OnInit } from '@angular/core';
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

  skills: Skill[];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.getSkills().subscribe(response => {
      console.log(response);
      this.skills = response;
      console.log(this.skills[0].id);
    });
  }

  addSkill(form: NgForm) {
    const skill = {
      skill: form.value.skill
    } as Skill;
    console.log(skill);

    this.skillService.addSkill(skill).subscribe(response => {
      console.log(response);
    });
    alert('skill added, refresh page!');
  }

}
