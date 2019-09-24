import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { UserLoginService } from '../userlogin.service';
import { UserCred } from '../model/usercred';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  doctor:Doctor = new Doctor();
  checkUsers: UserCred[];
  adminLoggedIn:boolean;

  constructor(private router: Router,
     private adminService: AdminService,
      private route: ActivatedRoute,
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
    });
  }

  updateDoctor():void
  {
     this.adminService.updateDoctor(this.doctor).subscribe( data => 
         {
           alert("Update Successful")
         })
      
  }
  createDoctor(): void {
    //let doctor:Doctor = new Doctor();
    this.adminService.createDoc(this.doctor).subscribe( data => {
      alert("Doctor successfully created");
    });

  };    


}
