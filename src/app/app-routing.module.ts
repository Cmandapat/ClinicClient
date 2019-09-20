import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoctorListComponent } from "./doctor-list/doctor-list.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminUpdateDoctorComponent } from './adminUpdateDoctor/adminUpdateDoctor.component';

//Routing for Angular app is configured in array of Routes, input so the router knows which component to display
const routes: Routes = [{ path: "doctors", component: DoctorListComponent }
, {path: "admin", component: AdminComponent}, {path: "adminUpdateDoctor", component: AdminUpdateDoctorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
