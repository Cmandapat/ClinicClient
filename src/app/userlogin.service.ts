import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserCred } from "./model/usercred";
@Injectable({
  providedIn: "root"
})
export class UserLoginService {
  private baseUrl = "http://localhost:8080/api/u/user";
  constructor(private http: HttpClient) {}

  userId: string;
  adminLoggedIn: boolean;
  user: UserCred;
  getAllUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateLoginStatus(loggedInUser: UserCred): Observable<any> {
    this.userId = loggedInUser.id;
    this.getUser(this.userId).subscribe( data =>{
      this.user = data;
      if(this.user.userType == "ADMIN"){
        this.adminLoggedIn = true;
      }
      else 
        this.adminLoggedIn = true;
    });
    console.log(this.userId);
    return this.http.put(`${this.baseUrl}/login`, loggedInUser);
  }

  logout(id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/logout/${id}`, id);
  }
}
