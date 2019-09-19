import { Component, OnInit } from '@angular/core';
import { UserProfileComponent} from "../user-profile/user-profile.component";
import { Observable } from "rxjs";
import { UserProfileService } from "../userprofile.service";
import { User } from "../model/User";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile-list',
  templateUrl: './user-profile-list.component.html',
  styleUrls: ['./user-profile-list.component.css']
})
export class UserProfileListComponent implements OnInit {
  users:Observable<User[]>;
  constructor(private userProfileService:UserProfileService,
              private rotuer: Router) { }
  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.users = this.userProfileService.getUserProfileList();
  }

}
