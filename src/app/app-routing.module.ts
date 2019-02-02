import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillComponent } from './pages/skill/skill.component';
import { ReportComponent } from './pages/report/report.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'skill',
    component: SkillComponent
  },
  {
    path: 'report',
    component: ReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
