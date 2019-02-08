import { Component, OnInit } from '@angular/core';

import {ProfilService} from '../../services/profil.service';
import {Profil} from '../../shared/models/Profil';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.scss']
})
export class UpdateinfoComponent implements OnInit {

  profil: Profil
  photo: String

  constructor(private profilService: ProfilService) { }

  ngOnInit() {
    // const id = +sessionStorage.getItem('userId');
    const id = 1;
    this.profilService.getProfil(String(id)).subscribe(response => {
      this.profil = response;
      this.photo = this.profil.image;
      console.log(this.profil.id);
    });

  }

  updateProfil() {
    this.profilService.postProfil(this.profil).subscribe();
  }

}
