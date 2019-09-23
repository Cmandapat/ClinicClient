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
import { ApptDetailsComponent } from './appt-details/appt-details.component';
import { ApptListComponent } from './appt-list/appt-list.component';
import { CreateApptComponent } from './create-appt/create-appt.component';

@NgModule({
  declarations: [AppComponent, DoctorDetailsComponent, DoctorListComponent, ApptDetailsComponent, ApptListComponent, CreateApptComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
