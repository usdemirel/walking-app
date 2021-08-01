import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  siginUserData: {email?:string; password?:string;} = {};

  constructor(private http: HttpClient, private jwtService: JwtClientService) { }

  ngOnInit(): void {
  }

  signinUser(){
    console.log("sign in user");
    console.log(this.siginUserData);
    this.jwtService.generateToken(this.siginUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
