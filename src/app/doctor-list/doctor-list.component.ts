import { Component, OnInit } from "@angular/core";
import { DoctorDetailsComponent } from "../doctor-details/doctor-details.component";
import { Observable } from "rxjs";
import { DoctorService } from "../doctor.service";
import { Doctor } from "../model/doctor";
import { Router } from "@angular/router";
@Component({
  selector: "app-doctor-list",
  templateUrl: "./doctor-list.component.html",
  styleUrls: ["./doctor-list.component.css"]
})
export class DoctorListComponent implements OnInit {
  doctors: Observable<Doctor[]>;
  constructor(private doctorService: DoctorService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.doctors = this.doctorService.getDoctorsList();
  }

  // doctorDetails(id: number) {
  //   this.router.navigate(["details", id]);
  // }
}
