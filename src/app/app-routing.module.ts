import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoctorListComponent } from "./doctor-list/doctor-list.component";
import { UserProfileListComponent } from "./user-profile-list/user-profile-list.component";
import { UserCreateComponent } from "./user-create/user-create.component"
import { UserLoginComponent } from './user-login/user-login.component';
//Routing for Angular app is configured in array of Routes, input so the router knows which component to display
const routes: Routes = [{ path: "doctors", component: DoctorListComponent }, 
                        {path:"users", component: UserProfileListComponent},
                        {path:"new", component: UserCreateComponent},
                        {path:"login", component: UserLoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
