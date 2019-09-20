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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [AppComponent, DoctorDetailsComponent, DoctorListComponent, UserProfileComponent, UserProfileListComponent, UserCreateComponent, UserLoginComponent],
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
