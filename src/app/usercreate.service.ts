import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from './model/user';
@Injectable({
  providedIn: "root"
})
export class UserCreateService {
  private baseUrl = "http://localhost:8080/api/up/UserProfiles";
  constructor(private http: HttpClient) {}

  postUser(user:User): Observable<any> {
     return this.http.post(`${this.baseUrl}`, user);
  }
}