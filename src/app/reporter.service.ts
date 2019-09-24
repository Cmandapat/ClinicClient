import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Doctor } from './model/doctor';
import { HttpHeaders } from '@angular/common/http';
//import { catchError} from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
    })
};


@Injectable({
    providedIn: "root"
  })
  export class ReporterService {
    private baseUrl = "http://localhost:8080/api/d/"; 

    constructor(private http: HttpClient) {}
  
    //Rest Methods
  

     updateDoctor(doctor:Doctor): Observable<any>
     {
       return this.http.put<Doctor>(`${this.baseUrl}/doctors/reporter/${doctor.id}`,doctor);
     }



}






