import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DoctorService {
  private baseUrl = "http://localhost:8080/api/d/doctors";
  constructor(private http: HttpClient) {}

  //Rest Methods

  getDoctorsList(): Observable<any> {
    console.log("hello");
    return this.http.get(`${this.baseUrl}`);
  }

  getDoctor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
