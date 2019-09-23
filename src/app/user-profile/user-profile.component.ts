import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from '../userprofile.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id: number;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userProfileService: UserProfileService
  ){}

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params["id"];

    this.userProfileService.getUserProfile(this.id).subscribe(
      data =>{
        this.user = data;
      },
      error => console.log(error)
    ) ;
  }

  list(){
    this.router.navigate(["users"]);
  }

}
