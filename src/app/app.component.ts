import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClinicClient';
  constructor(private router: Router, private activeRouter: ActivatedRoute, private location:Location){}

  isDoctorsRouteActivated(): boolean{
    return this.location.path().indexOf('/doctors') > -1;
  }
  
  isUserRouteActivated(): boolean{
    return (this.location.path().indexOf('/user') > -1);
  }

  isUsersOrDoctorsRouteActivated(): boolean{
    return (this.location.path().indexOf('/users') > -1 || this.location.path().indexOf('/doctors') > -1);
  }

  isAdminRouteActivated(): boolean{
    return this.location.path().indexOf('/admin') > -1;
  }
  
 
  isAdminNotHome(): boolean{
    return ((this.location.path().indexOf('/users') > -1) || (this.location.path().indexOf('/doctoradd') > -1) || (this.location.path().indexOf('/doctoredit') > -1)) && (!(this.location.path().indexOf('/admin') > -1));
  }

  isAnyUserRouteActivatedAfterLogin(): boolean{
    return ((!(this.location.path().indexOf('/login') > -1)));
  }

  isNoRouteActivated(): boolean{
    if((this.location.path().indexOf('/doctors') > -1) || (this.location.path().indexOf('/users') > -1) 
    || (this.location.path().indexOf('/user') > -1) || (this.location.path().indexOf('/new') > -1) 
    || (this.location.path().indexOf('/create') > -1) || (this.location.path().indexOf('/login') > -1) 
    || (this.location.path().indexOf('/appointment') > -1) || (this.location.path().indexOf('/doctoredit') > -1) 
    || (this.location.path().indexOf('/doctoradd') > -1) || (this.location.path().indexOf('/reporter') > -1)){
        return false;
    }
      else 
        return true;
  }
}
