import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Appointment } from "./model/appointment";

@Injectable({
  providedIn: "root"
})
export class ApptService {
  //look out for this
  private baseUrl = "http://localhost:8080/api/a/appointment";

  private baseUrl2 = "http://localhost:8080/api/a/appointment/patient";

  constructor(private http: HttpClient) {}

  getApptList() {
    return this.http.get(`${this.baseUrl}`, {
      responseType: "text" as "json"
    });
  }

  public getAppt(id: string) {
    return this.http.get(`${this.baseUrl2}/${id}`, {
      responseType: "text" as "json"
    });
  }

  createAppt(id: string, appt: Appointment): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}`, appt);
  }

  modifyAppt(id: number, appt: Appointment): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, appt);
  }

  cancelAppt(id: number): Observable<any> {
    //might have to add items to this function
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
