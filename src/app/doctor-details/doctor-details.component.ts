import { Component, OnInit } from "@angular/core";
import { Doctor } from "../model/doctor";
import { DoctorService } from "../doctor.service";
import { DoctorListComponent } from "../doctor-list/doctor-list.component";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-doctor-details",
  templateUrl: "./doctor-details.component.html",
  styleUrls: ["./doctor-details.component.css"]
})
export class DoctorDetailsComponent implements OnInit {
  id: number;
  doctor: Doctor;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService
  ) {}

  ngOnInit() {
    this.doctor = new Doctor();

    this.id = this.route.snapshot.params["id"];

    this.doctorService.getDoctor(this.id).subscribe(
      data => {
        this.doctor = data;
      },
      error => console.log(error)
    );
  }
  list() {
    this.router.navigate(["doctors"]);
  }
}
