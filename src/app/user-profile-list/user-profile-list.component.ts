import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { UserProfileService } from "../userprofile.service";
import { User } from "../model/User";
import { Router } from "@angular/router";
import { UserLoginService } from '../userlogin.service';
import { UserCred } from '../model/usercred';

@Component({
  selector: 'app-user-profile-list',
  templateUrl: './user-profile-list.component.html',
  styleUrls: ['./user-profile-list.component.css']
})
export class UserProfileListComponent implements OnInit {
  users:Observable<User[]>;
  checkUsers: UserCred[];
  adminLoggedIn:boolean;
  constructor(private userProfileService:UserProfileService,
              private router: Router,
              private userLoginService: UserLoginService) { }
  ngOnInit() {
    this.userLoginService.getAllUser().subscribe( data =>{ 
      this.checkUsers = data;
        for (let index = 0; index < this.checkUsers.length; index++) {
          const element = this.checkUsers[index];
          if(element.userType == "ADMIN"){
            if(element.loginStatus == 1){
              this.adminLoggedIn = true;
              break;
          } else {
            this.adminLoggedIn = false;
          }
        }
      } 
      if(this.adminLoggedIn == false){
        alert("You aren't the admin, redirecting")
        this.router.navigateByUrl("/");
      }
      this.reloadData();

    });
  } 

  reloadData(){
    this.users = this.userProfileService.getUserProfileList();
  }

  list(){
    this.router.navigate(["users"]);
  }
}
