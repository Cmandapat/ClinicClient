import { Component, OnInit } from '@angular/core';
import {Appointment} from '../model/appointment';
import {Doctor} from '../model/doctor';
import {DoctorListComponent} from '../doctor-list/doctor-list.component';
import { DoctorService } from "../doctor.service";
import { Observable } from "rxjs";
import { ApptService } from "../appt.service";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-create-appt',
  templateUrl: './create-appt.component.html',
  styleUrls: ['./create-appt.component.css']
})
export class CreateApptComponent implements OnInit {
doctors: Observable<Doctor[]>;
appt: Appointment = new Appointment();
id: string = "af4ee02";
//need the patientID
//id: any;
  constructor(private doctorService: DoctorService, private apptService: ApptService, 
    private datePipe: DatePipe 
  ) { }

  ngOnInit() {
    this.doctors = this.doctorService.getDoctorsList();
  }
//appt.patientId = "af4ee02";

createAppt(){
  this.apptService.createAppt(this.id, this.appt).subscribe(data =>{
    alert("Appointment Created Successfully!");
  }
  );
}

onSubmit() {
  alert("Doctor id:" +this.appt.doctorID);
  this.appt.patientID = "af4ee02";
  //this.appt.apptDate = this.datePipe.transform(this.appt.apptDate, "MM-dd-yyyy");
}



onChange(event) {
  if (this.appt.doctorID === event) return;
  this.appt.doctorID = event;
  console.log(this.appt.doctorID);
}



}
