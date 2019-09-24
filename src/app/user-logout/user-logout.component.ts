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
  checkUsers: UserCred[];
  anyoneLoggedIn:boolean;

  ngOnInit() {
    this.user = new UserCred(); 

    this.id = this.route.snapshot.params["id"];
    console.log("logout init");
    this.userLoginService.getAllUser().subscribe( data =>{ 
      this.checkUsers = data;
      console.log("found checked users");
        for (let index = 0; index < this.checkUsers.length; index++) {
          const element = this.checkUsers[index];
          console.log("for loop")
          if(element.loginStatus == 1){
              console.log("login status of 1 found");
              this.anyoneLoggedIn = true;
              this.id = element.id;
              break;
          } else {
            console.log();
            this.anyoneLoggedIn = false;
          }
        } 
        if(this.anyoneLoggedIn == false){
          alert("No One is logged in, sorry.")
          this.router.navigateByUrl("/");
        }
        this.userLoginService.logout(this.id).subscribe(
          data =>{
            this.loggedOutUser = data;
                this.router.navigateByUrl("/");        
        });
      });
  }

  list(){
    this.router.navigate(["login"]);
  }

}
