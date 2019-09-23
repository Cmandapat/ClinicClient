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

//need the patientID
//id: any;
  constructor(private doctorService: DoctorService, private apptService: ApptService, 
    private datePipe: DatePipe 
  ) { }

  ngOnInit() {
    this.doctors = this.doctorService.getDoctorsList();
  }
//appt.patientId = "af4ee02";
 id =  "af4ee02";

createAppt(){
  this.apptService.createAppt(this.appt, this.id).subscribe(data =>{
    alert("Appointment Created Successfully!");
  }
  );
}

onSubmit() {
  this.appt.apptDate = this.datePipe.transform(this.appt.apptDate, "MM-dd-yyyy");
}




}
