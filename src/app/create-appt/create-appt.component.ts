import { Component, OnInit } from "@angular/core";
import { Appointment } from "../model/appointment";
import { Doctor } from "../model/doctor";
import { DoctorListComponent } from "../doctor-list/doctor-list.component";
import { DoctorService } from "../doctor.service";
import { Observable } from "rxjs";
import { ApptService } from "../appt.service";
import { DatePipe } from "@angular/common";
import { UserLoginService } from "../userlogin.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create-appt",
  templateUrl: "./create-appt.component.html",
  styleUrls: ["./create-appt.component.css"]
})
export class CreateApptComponent implements OnInit {
  doctors: Observable<Doctor[]>;
  appt: Appointment = new Appointment();

  //need the patientID
  //id: any;
  constructor(
    private doctorService: DoctorService,
    private apptService: ApptService,
    private datePipe: DatePipe,
    private userLoginService: UserLoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  id: string = this.userLoginService.userId;

  ngOnInit() {
    this.doctors = this.doctorService.getDoctorsList();
  }
  //appt.patientId = "af4ee02";

  //myDate = new Date();

  q = Date.now();
  /*
m = this.q.getMonth();
d = this.q.getDay();
y = this.q.getFullYear(); */

  //date: string;
  date2: string;

  currentDate = this.datePipe.transform(this.q, "yyyy-MM-dd");

  ValidateDate(date1) {
    //alert(this.currentDate);
    //alert(date1);
    //console.log(date);
    //console.log(mydate)

    if (this.currentDate > date1) {
      // alert("greater");
      return false;
    } else {
      // alert("smaller");
      return true;
    }
  }

  createAppt() {
    this.date2 = this.datePipe.transform(this.appt.apptDate, "yyyy-MM-dd");
    console.log(this.id + "in create app");

    //if the date is before today's date return back to form
    if (this.ValidateDate(this.date2) == true) {
      //do nothing
      this.apptService.createAppt(this.id, this.appt).subscribe(data => {
        alert("Appointment Created Successfully!");
        this.router.navigateByUrl("/user/" + this.id);
      });
    } else {
      alert("Pick a date that's current");
      return;
    }
  }

  onSubmit() {
    alert("Doctor id:" + this.appt.doctorID);

    //fix this so date2 is in that format not apptDate

    // this.appt.patientID = "7dc84ab";
    //this.appt.apptDate = this.datePipe.transform(this.appt.apptDate, "MM-dd-yyyy");
  }

  onChange(event) {
    if (this.appt.doctorID === event) return;
    this.appt.doctorID = event;
    console.log(this.appt.doctorID);
  }
}
