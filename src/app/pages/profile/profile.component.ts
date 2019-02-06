import { Component, OnInit } from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {ProfilService} from '../../services/profil.service';
import {Profil} from '../../shared/models/Profil';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profil;

  constructor(private profilService: ProfilService) { }

  ngOnInit() {
    const id = +sessionStorage.getItem('userId');
    this.profilService.getProfil(id).subscribe(response => {
      this.profil = response;
      console.log(this.profil.id);
    });
  }

}
