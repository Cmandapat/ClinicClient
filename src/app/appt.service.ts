import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {Appointment} from './model/appointment';


@Injectable({
  providedIn: 'root'
})
export class ApptService {
  //look out for this
  private baseUrl = "http://localhost:8080/api/a/appointment";


  constructor(private http: HttpClient) { }

  getApptList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAppt(id: number): Observable<any>{
  return this.http.get(`${this.baseUrl}/${id}`);
  }

createAppt(appt: Appointment, id: string): Observable<Appointment> {

    return this.http.post<Appointment>(`${this.baseUrl}/${id}`, appt );
}


modifyAppt(appt: Appointment, id: number): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, appt);
}



cancelAppt(id: number):Observable<any>{
  //might have to add items to this function
  return this.http.delete(`${this.baseUrl}/${id}`);
}


}
