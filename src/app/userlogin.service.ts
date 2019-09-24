import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserCred } from './model/usercred';
@Injectable({
  providedIn: "root"
})
export class UserLoginService {
  private baseUrl = "http://localhost:8080/api/u/user";
  constructor(private http: HttpClient) {}
  getAllUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  getUser(id: string): Observable<any> {
     return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateLoginStatus(loggedInUser: UserCred): Observable<any>{
    return this.http.put(`${this.baseUrl}/login`, loggedInUser);
  }

  logout(id: string, loggedInUser: UserCred): Observable<any>{
    return this.http.put(`${this.baseUrl}/logout/${id}`, loggedInUser);
  } 
}