import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  private baseUrl = "http://localhost:8080/api/up/UserProfiles";
  constructor(private http: HttpClient) {}

  //Rest Methods

  getUserProfileList(): Observable<any> { 
    console.log("hello");
    return this.http.get(`${this.baseUrl}`);
  }

  getUserProfile(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}