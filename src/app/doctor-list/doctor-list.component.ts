import { Component, OnInit } from "@angular/core";
import { DoctorDetailsComponent } from "../doctor-details/doctor-details.component";
import { Observable } from "rxjs";
import { DoctorService } from "../doctor.service";
import { Doctor } from "../model/doctor";
import { Router } from "@angular/router";
import { UserLoginService } from '../userlogin.service';
import { UserCred } from '../model/usercred';
@Component({
  selector: "app-doctor-list",
  templateUrl: "./doctor-list.component.html",
  styleUrls: ["./doctor-list.component.css"]
})
export class DoctorListComponent implements OnInit {
  doctors: Observable<Doctor[]>;

  checkUsers: UserCred[];
  adminLoggedIn: boolean;
  constructor(private doctorService: DoctorService, 
              private router: Router,
              private userLoginService: UserLoginService) {}


  ngOnInit() {
    this.userLoginService.getAllUser().subscribe( data =>{ 
      this.checkUsers = data;
      for (let index = 0; index < this.checkUsers.length; index++) {
        const element = this.checkUsers[index];
        if(element.userType == "ADMIN"){
          if(element.loginStatus == 1){
            this.adminLoggedIn = true;
            break;
          } else {
          }
        } else {
          this.adminLoggedIn = false;
        }
      } 
      if(this.adminLoggedIn == false){
        alert("You aren't the admin, redirecting")
        this.router.navigateByUrl("/");
      }
      this.reloadData();
    });
  }
  reloadData() {
    this.doctors = this.doctorService.getDoctorsList();
  }

  // doctorDetails(id: number) {
  //   this.router.navigate(["details", id]);
  // }
}
