import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './pages/report/report.component';
import {SkillComponent} from './pages/skill/skill.component';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import {LoginComponent} from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import {Users} from './subscribe/Users';
import { UpdateinfoComponent } from './pages/updateinfo/updateinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    SkillComponent,
    ProfileComponent,
    LoginComponent,
    HeaderComponent,
    UpdateinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [Users],
  bootstrap: [AppComponent]
})
export class AppModule { }
