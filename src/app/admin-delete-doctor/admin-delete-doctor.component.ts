import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLoginService } from '../userlogin.service';
import { UserCred } from '../model/usercred';
@Component({
  selector: 'app-admin-delete-doctor',
  templateUrl: './admin-delete-doctor.component.html',
  styleUrls: ['./admin-delete-doctor.component.css']
})
export class AdminDeleteDoctorComponent implements OnInit {
doctor:Doctor = new Doctor();
checkUsers: UserCred[];
adminLoggedIn:boolean;
  constructor(private adminService: AdminService,
              private router: Router,
              private userLoginService: UserLoginService) { 
    
  }

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
    });
  }

  deleteDoctor():void
  {
   // this.doctors = this.adminService.updateDoctor(this.doctor);
        this.adminService.deleteDoctor(this.doctor).subscribe( data => 
         {
           alert("doctor has been Deleted Successfully");
         })
      
  }
}
