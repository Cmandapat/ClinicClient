import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ReporterService } from "../reporter.service";
import { Doctor } from "../model/doctor";
import { Router } from "@angular/router";
import { Reporter } from "../model/reporter";


@Component({
  selector: 'app-reporter-list',
  templateUrl: './reporter-list.component.html',
  styleUrls: ['./reporter-list.component.css']
})
export class ReporterListComponent {
  doctor: Doctor = new Doctor();
  reporter: Reporter = new Reporter();

  leaveForm;
  reporters: Observable<Doctor[]>;
  constructor(private reporterService: ReporterService, 
    private router: Router  ) {}
  
    updateDoctor():void
    {
      this.doctor.id=this.reporter.id;
      this.doctor.startLeaveDate=this.reporter.startLeaveDate;
      this.doctor.endLeaveDate=this.reporter.endLeaveDate;
       this.reporterService.postStartLeave(this.doctor).subscribe( data =>
           {
             alert("Update Successful")
           })
    } 

  

}
