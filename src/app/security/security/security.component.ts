import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: any = {
    "email" : "serkan@gmail.com",
    "password" : "password"
  }

  constructor(private service: JwtClientService) { }

  ngOnInit(): void {
    console.log("request is created");
    this.getAccessToken(this.authRequest);
    console.log("request is created2");
  }

  public getAccessToken(request:any){
    console.log("request is created3");
    let resp = this.service.generateToken(request);
    console.log("request is created4");

    resp.subscribe(data => console.log("Token: " + data))
  }

}
