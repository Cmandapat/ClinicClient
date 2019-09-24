import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-delete-doctor',
  templateUrl: './admin-delete-doctor.component.html',
  styleUrls: ['./admin-delete-doctor.component.css']
})
export class AdminDeleteDoctorComponent implements OnInit {
doctor:Doctor = new Doctor();
  constructor(  private adminService: AdminService,
    private router: Router,) { 
    
  }

  ngOnInit() {
  }

  deleteDoctor():void
  {
   // this.doctors = this.adminService.updateDoctor(this.doctor);
        this.adminService.deleteDoctor(this.doctor).subscribe( data => 
         {
           alert(this.doctor.firstName + " " + this.doctor.lastName + " has been Deleted Successfully")
         })
      
  }
}
