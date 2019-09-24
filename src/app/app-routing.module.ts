import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoctorListComponent } from "./doctor-list/doctor-list.component";
import { ApptListComponent } from './appt-list/appt-list.component';
import {ApptDetailsComponent} from './appt-details/appt-details.component';

import {CreateApptComponent} from './create-appt/create-appt.component';



import { AdminComponent } from "./admin/admin.component";
import { AdminUpdateDoctorComponent } from './adminUpdateDoctor/adminUpdateDoctor.component';
import { UserProfileListComponent } from "./user-profile-list/user-profile-list.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserCreateComponent } from "./user-create/user-create.component"
import { UserLoginComponent } from './user-login/user-login.component';

import { ApptUpdateComponent } from './appt-update/appt-update.component';

import { UserLogoutComponent } from './user-logout/user-logout.component';
import {ReporterComponent } from  './reporter/reporter.component'
import { AdminDeleteDoctorComponent } from './admin-delete-doctor/admin-delete-doctor.component'


//Routing for Angular app is configured in array of Routes, input so the router knows which component to display
const routes: Routes = [{ path: "doctors", component: DoctorListComponent }, 
                        {path:"users", component: UserProfileListComponent},
                        {path:"user", component: UserProfileComponent},
                        {path: "user/:id", component: UserProfileComponent },
                        {path:"new", component: UserCreateComponent},
                        {path:"login", component: UserLoginComponent},
                        {path:"logout", component: UserLogoutComponent}, 
                        {path:"logout/:id", component: UserLogoutComponent},
                        {path: "admin", component: AdminComponent}, 
                        {path: "adminUpdateDoctor", component: AdminUpdateDoctorComponent },
                        {path: "adminDeleteDoctor", component: AdminDeleteDoctorComponent },
                        {path: "appointment", component: ApptListComponent},
                        {path: "appointment/:id", component: ApptDetailsComponent},
                        {path: "appointment1", component: CreateApptComponent},
                        {path: "appointment2/:id", component: ApptUpdateComponent},
                        {path: "reporter", component: ReporterComponent},
                        {path: "logout", component: UserLogoutComponent}

                       ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
