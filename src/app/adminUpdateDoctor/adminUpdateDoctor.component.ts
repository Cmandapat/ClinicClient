import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-adminUpdateDoctor',
  templateUrl: './adminUpdateDoctor.component.html',
  styleUrls: ['./adminUpdateDoctor.component.css']
})
export class AdminUpdateDoctorComponent {

  doctor:Doctor = new Doctor();

  constructor(private router: Router,
     private adminService: AdminService,
      private route: ActivatedRoute) {}


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
