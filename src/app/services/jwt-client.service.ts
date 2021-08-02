import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  user:User;

  constructor(private http: HttpClient, private router: Router) { }

  public generateToken(request: any){
    console.log(",  {responseType: 'text' as 'json'}");
    let result = this.http.post<any>("http://localhost:8090/api/token/generate-token", request);
    return result;
  }

  public getUserDetails(){
    this.http.get<User>("http://localhost:8090/api/token/getuserdetails").subscribe( user => {
      console.log("User Logged in -----> " + user);
      this.user = user;
    },
    err => {
      console.log('error: ' + err.status );
      this.logoutUser();
    });
  }
  
  public welcome(token: string){
    let tokenStr = "Bearer " + token;
    const headers= new HttpHeaders().set("Authorization",tokenStr).set("Access-Control-Allow-Origin","*");
    return this.http.get("http://localhost:8090/api/productdescriptions", {headers, responseType: 'text' as 'json'})
  }

  public loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }


}
