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
  export class AdminService {
    private baseUrl = "http://localhost:8080/api/d/"; 

    constructor(private http: HttpClient) {}
  
    //Rest Methods
  
    getAppointments(): Observable<any> {
        return this.http.get(`${this.baseUrl}/appt`);
    }

     createDoc(doctor: Doctor): Observable<any> {
        return this.http.post<Doctor>(`${this.baseUrl}/doctors`, doctor);
    }

     updateDoctor(doctor:Doctor): Observable<any>
     {
       return this.http.put<Doctor>(`${this.baseUrl}/doctors/${doctor.id}`,doctor);
     }

     deleteDoctor(doctor:Doctor): Observable<any>
     {
        
       return this.http.delete<Doctor>(`${this.baseUrl}doctors/${doctor.id}`);
     }











}






