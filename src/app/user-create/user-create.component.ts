import { Component, OnInit } from "@angular/core";
import { User } from "../model/user";
import { Router, ActivatedRoute } from "@angular/router";
import { UserCreateService } from "../usercreate.service";
import { UserProfileService } from "../userprofile.service";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"]
})
export class UserCreateComponent implements OnInit {
  user: User;
  getUsers: User[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userCreateService: UserCreateService,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit() {
    this.user = new User();
  }

  list() {
    this.router.navigate(["new"]);
  }

  createUser(): void {
    this.userCreateService.postUser(this.user).subscribe(data => {
      alert("User successfully created");
      this.userProfileService.getUserProfileList().subscribe(data => {
        this.getUsers = data;
        this.getUsers.forEach(element => {
          if (
            element.firstName + element.lastName ==
            this.user.firstName + this.user.lastName
          ) {
            alert("Your id is: " + element.userID + ". Don't forget it!");
          }
        });
      });
      this.router.navigateByUrl("/login");
    });
  }
}
