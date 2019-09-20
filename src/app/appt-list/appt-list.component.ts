import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ApptService } from "../appt.service";
import { Appointment} from "../model/appointment";
import { Router } from "@angular/router";



@Component({
  selector: 'app-appt-list',
  templateUrl: './appt-list.component.html',
  styleUrls: ['./appt-list.component.css']
})
export class ApptListComponent implements OnInit {

  appts: Observable<Appointment[]>;


  constructor(private apptService: ApptService) { }

  ngOnInit() {
    this.getApptList();
  }

  /*getApptList(): void {
    this.apptService.getApptList()
      .subscribe(appts => this.appts = appts);
  } */
  getApptList() {
    this.appts = this.apptService.getApptList();
  }

}
