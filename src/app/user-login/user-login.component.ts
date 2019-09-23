import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { Router, ActivatedRoute } from "@angular/router";
import { UserLoginService } from '../userlogin.service';
import { UserCred } from "../model/usercred";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userInfo:UserCred;
  checkedUser:UserCred;
  userGrabSuccess:boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userLoginService: UserLoginService
  ) { }

  ngOnInit() {
    this.userInfo = new UserCred; 
    this.checkedUser = new UserCred; 
  }

  checkUser(){
      this.userLoginService.updateLoginStatus(this.userInfo).subscribe(data =>{
        this.checkedUser = data;
        if(this.checkedUser.loginStatus == 1){ 
          alert("Login Successful");
          this.router.navigateByUrl(`/user/${this.checkedUser.id}`);
        }else{
          alert("Login Unsuccessful, Perhaps you haven't created an account, or maybe try a different password.");
        }
      });
  }

  list(){
    this.router.navigate(["login"]);
  }




}
