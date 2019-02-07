import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {SkillComponent} from './pages/skill/skill.component';
import {ReportComponent} from './pages/report/report.component';
import { UpdateinfoComponent } from './pages/updateinfo/updateinfo.component';

const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'profile',
    component : ProfileComponent
  },
  {
    path: 'skills',
    component : SkillComponent
  },
  {
    path: 'report',
    component : ReportComponent
  },
  {
    path: 'editInfo',
    component : UpdateinfoComponent
  }
  ,
  {
    path: '**',
    redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
