import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from '../userprofile.service';
import { UserCred } from '../model/usercred';
import { UserLoginService } from '../userlogin.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userLoginService: UserLoginService
  ) { }

  id: string;
  user: UserCred;
  loggedOutUser: UserCred;

  ngOnInit() {
    this.user = new UserCred();

    this.id = this.route.snapshot.params["id"];

    this.userLoginService.logout(this.id, this.user).subscribe(
      data =>{
        this.loggedOutUser = data;
            this.router.navigateByUrl("/");        
    });
  }

  list(){
    this.router.navigate(["login"]);
  }

}
