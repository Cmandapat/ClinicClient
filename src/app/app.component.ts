import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { UserLoginService } from "./userlogin.service";
import { UserCred } from "./model/usercred";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ClinicClient";
  user: UserCred;
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private location: Location,
    private userLoginService: UserLoginService
  ) {}

  isDoctorsRouteActivated(): boolean {
    return this.location.path().indexOf("/doctors") > -1;
  }

  isUserRouteActivated(): boolean {
    return this.location.path().indexOf("/user") > -1;
  }

  isUsersRouteActivated(): boolean {
    return this.location.path().indexOf("/users") > -1;
  }

  isAdminRouteActivated(): boolean {
    return (
      this.location.path().indexOf("/admin") > -1 ||
      this.location.path().indexOf("/doctors") > -1
    );
  }

  isAdminNotHome(): boolean {
    if (
      (this.location.path().indexOf("/users") > -1 ||
        this.location.path().indexOf("/doctoradd") > -1 ||
        this.location.path().indexOf("/doctoredit") > -1 ||
        this.location.path().indexOf("/appointment1") > -1 ||
        this.location.path().indexOf("/appointment") > -1 ||
        this.location.path().indexOf("/appointment2") > -1) &&
      !(this.location.path().indexOf("/admin") > -1) &&
      this.userLoginService.adminLoggedIn
    ) {
      return true;
    } else return false;
  }

  isAnyUserRouteActivatedAfterLogin(): boolean {
    if (this.areLoginOrCreateActive() || this.isNoRouteActivated()) {
      return false;
    } else {
      return true;
    }
  }

  doShowAppointment(): boolean {
    if (this.areLoginOrCreateActive() || this.isNoRouteActivated()) {
      return false;
    } else if (
      this.location.path().indexOf("/appointment1") > -1 ||
      this.location.path().indexOf("/reporter") > -1
    ) {
      return false;
    } else {
      return true;
    }
  }

  areLoginOrCreateActive(): boolean {
    return (
      this.location.path().indexOf("/login") > -1 ||
      this.location.path().indexOf("/new") > -1
    );
  }

  isNoRouteActivated(): boolean {
    if (
      this.location.path().indexOf("/doctors") > -1 ||
      this.location.path().indexOf("/users") > -1 ||
      this.location.path().indexOf("/user") > -1 ||
      this.location.path().indexOf("/new") > -1 ||
      this.location.path().indexOf("/create") > -1 ||
      this.location.path().indexOf("/login") > -1 ||
      this.location.path().indexOf("/appointment") > -1 ||
      this.location.path().indexOf("/doctoredit") > -1 ||
      this.location.path().indexOf("/doctoradd") > -1 ||
      this.location.path().indexOf("/reporter") > -1 ||
      this.location.path().indexOf("/admin") > -1
    ) {
      return false;
    } else return true;
  }
}
