import { Component, OnInit } from '@angular/core';
import { ApptService } from '../appt.service';
import { Appointment } from '../model/appointment';
import {ActivatedRoute, Router} from '@angular/router';
import { DoctorService } from "../doctor.service";
import {Doctor} from '../model/doctor';
import { Observable } from "rxjs";

@Component({
  selector: 'app-appt-update',
  templateUrl: './appt-update.component.html',
  styleUrls: ['./appt-update.component.css']
})
export class ApptUpdateComponent implements OnInit {
  //updatedAppt: Appointment = new Appointment();
  appt: Appointment = new Appointment();
  doctors: Observable<Doctor[]>;
  
  constructor(private apptService: ApptService,
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
    this.doctors = this.doctorService.getDoctorsList();
    this.getAppt();
  }

  getAppt(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apptService.getAppt(id)
      .subscribe(appt => this.appt = appt);
  } 

  onSubmit() {
    alert("Doctor id:" +this.appt.doctorID);
    //this.appt.patientID = "af4ee02";
    //this.appt.apptDate = this.datePipe.transform(this.appt.apptDate, "MM-dd-yyyy");
  }

  updateAppt(){
    this.apptService.modifyAppt(this.appt.apptID, this.appt).subscribe(data =>{
      alert("Appointment Updated Successfully!");
    }
    );
  }

  onChange(event) {
    if (this.appt.doctorID === event) return;
    this.appt.doctorID = event;
    console.log(this.appt.doctorID);
  }

 /* onChange1(event) {
    if (this.appt.symptoms === event) return;
    this.appt.symptoms = event;
    //console.log(this.appt.doctorID);
  }  */

  

}
