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

  selectedValue = null;
  profil;
  photo: string;
  profils: Array<Profil>;

  constructor(private profilService: ProfilService) { }

  ngOnInit() {
    const id = +sessionStorage.getItem('userId');
    this.profilService.getProfil(id).subscribe(response => {
      this.profil = response;
      this.photo = this.profil.image;
      console.log(this.profil.id);
    });
    this.profilService.getProfils().subscribe(response => {
      this.profils = response;
      console.log(this.profils);
    });
  }

  onChange() {
    console.log(this.selectedValue.id);
    this.profilService.getProfil(this.selectedValue.id).subscribe(response => {
      this.profil = response;
      this.photo = this.profil.image;
      console.log(this.profil);
    });
  }

}
