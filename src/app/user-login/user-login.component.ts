import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { Router, ActivatedRoute } from "@angular/router";
import { UserLoginService } from '../userlogin.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userInfo:User;
  checkedUser:User;
  userGrabSuccess:boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userLoginService: UserLoginService
  ) { }

  ngOnInit() {
    this.userInfo = new User; 
    this.checkedUser = new User; 
  }

  checkUser(){
    this.userLoginService.getUser(this.checkedUser.id).subscribe( data => {
      this.userInfo = data;
      if(this.checkedUser.name == this.userInfo.name){
        alert("Login Successful");
        this.router.navigateByUrl('/users');
      }else{
        alert("Login Unsuccessful, Perhaps you haven't created an account, or maybe try a different password.");
      }
    });
  }

  list(){
    this.router.navigate(["login"]);
  }




}
