import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApptService } from "../appt.service";
import { Appointment } from "../model/appointmentdetails";
import { Router } from "@angular/router";

@Component({
  selector: "app-appt-list",
  templateUrl: "./appt-list.component.html",
  styleUrls: ["./appt-list.component.css"]
})
export class ApptListComponent implements OnInit {
  appts: Observable<Appointment[]>;

  constructor(private apptService: ApptService) {}
  // apptId: any[] = [];
  // apptDate: any[] = [];
  // patientId: any[] = [];
  // doctorFirstName: any[] = [];
  // doctorLastName: any[] = [];
  appointments: any[];
  appointmentList: Appointment[] = [];
  // testx: any[];

  ngOnInit() {
    this.apptService.getApptList().subscribe(result => {
      const response = result as string;
      const parsedResponse = JSON.parse(response);
      this.appointments = parsedResponse;
      console.log(this.appointments.length);
      console.log(this.appointments[0].doctor.id);
      for (let i = 0; i < this.appointments.length; i++) {
        this.appointmentList.push(
          new Appointment(
            this.appointments[i].apptID,
            this.appointments[i].doctor.id,
            this.appointments[i].userProfile.userID,
            this.appointments[i].symptoms,
            this.appointments[i].apptDate,
            this.appointments[i].apptTime
          )
        );
        // console.log(this.appointments[i].doctor.id);
        // this.apptId.push(this.appointments[i].apptID);
        // console.log(this.apptId[i]);
        // this.apptDate.push(this.appointments[i].apptDate);
        // this.doctorFirstName.push(this.appointments[i]).
        // this.appointmentList[i].apptID = this.appointments[i].apptID;
        // console.log(this.appointmentList[i].apptID);
        // this.appointmentList[i].doctorID = this.appointments[i].doctor.id;
        // console.log(this.appointmentList[i].doctorID);
        // this.appointmentList[i].patientID = this.appointments[
        //   i
        // ].userProfile.userID;
        // this.appointmentList[i].symptoms = this.appointments[i].symptoms;
        // this.appointmentList[i].apptDate = this.appointments[i].apptDate;
        // this.appointmentList[i].apptTime = this.appointments[i].apptTime;
      }
    });
  }

  /*getApptList(): void {
    this.apptService.getApptList()
      .subscribe(appts => this.appts = appts);
  } */
  // getApptList() {
  //   this.appts = this.apptService.getApptList();
  // }
}
