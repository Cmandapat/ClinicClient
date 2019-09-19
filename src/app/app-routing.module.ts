import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoctorListComponent } from "./doctor-list/doctor-list.component";

//Routing for Angular app is configured in array of Routes, input so the router knows which component to display
const routes: Routes = [{ path: "doctors", component: DoctorListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
