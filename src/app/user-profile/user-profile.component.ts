import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from '../userprofile.service';
import { UserCred } from '../model/usercred';
import { UserLoginService } from '../userlogin.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userProfileService: UserProfileService,
    private userLoginService: UserLoginService
  ){}

  id: string;
  user: User;
  checkedUser: UserCred;
  firstName: string;
  lastName: string;
  
  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params["id"];

    this.userProfileService.getUserProfile(this.id).subscribe(
      data =>{
        this.user = data;
        this.userLoginService.getUser(this.id).subscribe( data =>{ 
          this.checkedUser = data;
          if(this.checkedUser.loginStatus == 1){
              this.firstName = this.user.firstName;
              this.lastName = this.user.lastName;
          } else{
            this.router.navigateByUrl("/");
          }         
        });
      },
      error => console.log(error)
    ) ;
  }

  list(){
    this.router.navigate(["user"]);
  }

}
