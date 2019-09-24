import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { DoctorDetailsComponent } from "./doctor-details/doctor-details.component";
import { DoctorListComponent } from "./doctor-list/doctor-list.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { DatePipe } from '@angular/common';




import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUpdateDoctorComponent } from './adminUpdateDoctor/adminUpdateDoctor.component';
import { ApptDetailsComponent } from './appt-details/appt-details.component';
import { ApptListComponent } from './appt-list/appt-list.component';
import { CreateApptComponent } from './create-appt/create-appt.component';
import { ApptUpdateComponent } from './appt-update/appt-update.component';

@NgModule({
  declarations: [AppComponent, DoctorDetailsComponent, DoctorListComponent, UserProfileComponent, UserProfileListComponent, UserCreateComponent, UserLoginComponent, AdminComponent,AdminUpdateDoctorComponent, ApptDetailsComponent, ApptListComponent, CreateApptComponent, ApptUpdateComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    //DatePipe
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
