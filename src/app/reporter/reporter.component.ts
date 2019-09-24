import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { ReporterService } from '../reporter.service';
import { DoctorService } from '../doctor.service'
import { Observable } from "rxjs";

@Component({
  selector: 'app-reporter',
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.css']
})
export class ReporterComponent implements OnInit {

  doctor:Doctor = new Doctor();
  doctors: Observable<Doctor[]>;

  constructor(private reporterService: ReporterService,
    private doctorService: DoctorService) { }


  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.doctors = this.doctorService.getDoctorsList();
  }
  updateDoctor():void
  {
     this.reporterService.updateDoctor(this.doctor).subscribe( data => 
         {
           alert("Update Successful")
         })
      
  }

}
