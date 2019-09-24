import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//import {Location} from '@angular/common';
import {Appointment} from '../model/appointment';
import {ApptService} from '../appt.service';


@Component({
  selector: 'app-appt-details',
  templateUrl: './appt-details.component.html',
  styleUrls: ['./appt-details.component.css']
})
export class ApptDetailsComponent implements OnInit {
  //@Input() appt: Appointment;
  appt: Appointment;
  //id: number;
  constructor(
    private route: ActivatedRoute,
    private apptService: ApptService,
    //private location: Location;
    private router: Router

  ) { }

  ngOnInit(): void {
    
    this.getAppt();
    /*this.appt = new Appointment();

    this.id = +this.route.snapshot.params["id"];

    this.apptService.getAppt(this.id).subscribe(
      data => {
        this.appt = data;
      },
      error => console.log(error)
    ); */

  }

  getAppt(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apptService.getAppt(id)
      .subscribe(appt => this.appt = appt);
  } 


  routeToEdit() : void {
    this.router.navigateByUrl(`/appointment2/${this.appt.apptID}`);
  }



}
