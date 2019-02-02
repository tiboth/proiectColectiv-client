import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { User } from 'src/app/shared/models/user';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private firstName="Alexander";
  private idToSearch=1;
  private user:User={id:1,username:"",password:"",email:"",salary:0,skills:[]}
  private list=[1,2,3,4]
  private toggle=false;

  constructor(private userService:UserServiceService) { }
  toggleButton()
  {
    this.toggle=!this.toggle;
  }
  getUser(){
        console.log(this.userService);
    this.userService.getUser(this.idToSearch).subscribe((response:User)=>{
     this.user=response;
    })
  }
  updateUser()
  {
    
    this.userService.postUser(this.user).subscribe();
  }

  ngOnInit() {
    this.getUser();
  }

}
