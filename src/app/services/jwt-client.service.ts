import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) { }

  public generateToken(request: any){
    console.log("request is created5");
    return this.http.post("http://localhost:8090/api/token/generate-token", request,  {responseType: 'text' as 'json'});
  }
  
  public welcome(token: string){
    let tokenStr = "Bearer " + token;
    const headers= new HttpHeaders().set("Authorization",tokenStr).set("Access-Control-Allow-Origin","*");
    return this.http.get("http://localhost:8090/api/productdescriptions", {headers, responseType: 'text' as 'json'})
  }


}
