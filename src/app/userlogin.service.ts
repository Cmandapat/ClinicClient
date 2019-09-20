import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from './model/user';
@Injectable({
  providedIn: "root"
})
export class UserLoginService {
  private baseUrl = "http://localhost:8080/api/up/UserProfiles";
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/{id}`);
  }
  
}