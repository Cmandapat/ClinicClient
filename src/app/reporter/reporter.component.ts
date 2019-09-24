import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { ReporterService } from '../reporter.service';
import { DoctorService } from '../doctor.service'
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { UserLoginService } from '../userlogin.service';
import { User } from '../model/user';
import { UserCred } from '../model/usercred';

@Component({
  selector: 'app-reporter',
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.css']
})
export class ReporterComponent implements OnInit {

  doctor:Doctor = new Doctor();
  doctors: Observable<Doctor[]>;
  checkUsers: UserCred[];
  reporterLoggedIn: boolean;

  constructor(private reporterService: ReporterService,
    private doctorService: DoctorService,
    private router: Router,
    private userLoginService:UserLoginService ) { }


  ngOnInit() {
    this.userLoginService.getAllUser().subscribe( data =>{ 
      this.checkUsers = data;
      for (let index = 0; index < this.checkUsers.length; index++) {
        const element = this.checkUsers[index];
        if(element.userType == "REP"){
          if(element.loginStatus == 1){
            this.reporterLoggedIn = true;
            break;
          } else {
          }
        } else {
          this.reporterLoggedIn = false;
        }
      } 
      if(this.reporterLoggedIn == false){
        alert("Sorry, the reporter is not logged in, redirecting")
        this.router.navigateByUrl("/");
      }
      this.reloadData();
    });
  }
  reloadData() {
    this.doctors = this.doctorService.getDoctorsList();
  }
  updateDoctor():void
  {
    this.reporterService.updateDoctor(this.doctor).subscribe( data => {
      alert("Update Successful");
      this.router.navigateByUrl("/reporter");
    });
  }

}
