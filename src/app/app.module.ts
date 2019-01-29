import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './pages/report/report.component';
import {SkillComponent} from './pages/skill/skill.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    SkillComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
