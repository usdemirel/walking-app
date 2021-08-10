import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userData: {
    email?:string; 
    password?:string;
    firstName?:string;
    lastName?:string;
    phone?:string;
  } = {};

  constructor(private http: HttpClient, private jwtService: JwtClientService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log("register user..");
    console.log(this.userData);
  }

}
