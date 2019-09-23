import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoctorListComponent } from "./doctor-list/doctor-list.component";
import { ApptListComponent } from './appt-list/appt-list.component';
import {ApptDetailsComponent} from './appt-details/appt-details.component';

//Routing for Angular app is configured in array of Routes, input so the router knows which component to display
const routes: Routes = [{ path: "doctors", component: DoctorListComponent },
{path: "appointment", component: ApptListComponent},
{path: "appointment/:id", component: ApptDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
