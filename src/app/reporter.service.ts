import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Reporter } from './model/reporter';
import { Doctor} from './model/doctor';
@Injectable({
  providedIn: "root"
})
export class ReporterService {
  

  private baseUrl = "http://localhost:8080/api/r/";
  constructor(private http: HttpClient) {}

  //Rest Methods

  getDoctorsList(): Observable<any> {
    console.log("hello");
    return this.http.get(`${this.baseUrl}`);
  }

  getDoctor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  postStartLeave(doctor:Doctor): Observable<any>
  {
    return this.http.put<Doctor>(`${this.baseUrl}doctors/${doctor.id}` ,doctor);
  }
}
