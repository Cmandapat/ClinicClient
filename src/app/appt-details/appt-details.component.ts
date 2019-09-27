import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { Appointment } from "../model/appointment";
import { ApptService } from "../appt.service";
import { DoctorService } from "../doctor.service";
import { Doctor } from "../model/doctor";

@Component({
  selector: "app-appt-details",
  templateUrl: "./appt-details.component.html",
  styleUrls: ["./appt-details.component.css"]
})
export class ApptDetailsComponent implements OnInit {
  //@Input() appt: Appointment;
  appt: Appointment;
  //id: number;
  constructor(
    private route: ActivatedRoute,
    private apptService: ApptService,
    private location: Location,
    private router: Router,
    private appointmentService: ApptService,
    private doctorService: DoctorService
  ) {}

  id: string;
  firstName: string;
  lastName: string;
  apptDate: string;
  apptTime: string;
  symptoms: string;
  hasAppointment: boolean;
  doctorFirstName: string;
  doctorLastName: string;
  doctorSpecialization: string;
  doctorYearsofExperience: number;
  doctorOnLeave: number;
  needDoctor: boolean = true;
  doctor: Doctor = new Doctor();

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.appointmentService.getAppt(this.id).subscribe(result => {
      if (result) {
        const response = result as string;
        const parsedResponse = JSON.parse(response);
        this.apptDate = parsedResponse.apptDate;
        this.apptTime = parsedResponse.apptTime;
        this.symptoms = parsedResponse.symptoms;
        if (parsedResponse.doctor == null) {
          console.log("hello");
          //this.needDoctor = true;
        } else {
          this.doctorFirstName = parsedResponse.doctor.firstName;
          this.doctorLastName = parsedResponse.doctor.lastName;
          this.doctorSpecialization = parsedResponse.doctor.specialization;
          this.doctorYearsofExperience =
            parsedResponse.doctor.yearsOfExperience;
          this.doctorOnLeave = parsedResponse.doctor.leave;
        }
      }
    });
  }

  routeToEdit(): void {
    this.router.navigateByUrl(`/appointment2/${this.appt.apptID}`);
  }

  //need to delete and redirect back to home page

  /*lastLocation() : void {
    this.deleteAppt();
    this.location.back();
  } */

  deleteAppt(): void {
    this.apptService.cancelAppt(this.appt.apptID).subscribe(data => {
      alert("Appointment Cancelled Successfully");
      alert("apptID:" + this.appt.apptID);
    });
    this.location.back();
  }
}
