import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { Router, ActivatedRoute } from "@angular/router";
import { UserCreateService } from '../usercreate.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user:User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userCreateService: UserCreateService
  ) { }

  ngOnInit() {
    this.user = new User; 
  }

  list(){
    this.router.navigate(["new"]);
  }

  createUser(): void {
    this.userCreateService.postUser(this.user).subscribe( data => {
      alert("User successfully created");
    });
  };

}
