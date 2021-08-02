import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  siginUserData: {email?:string; password?:string;} = {};

  constructor(private http: HttpClient, private jwtService: JwtClientService, private router: Router) { }

  ngOnInit(): void {
  }

  signinUser(){
    console.log("sign in user");
    console.log(this.siginUserData);
    this.jwtService.generateToken(this.siginUserData).subscribe(
      res => {
        console.log("res: " + res.token);
        localStorage.setItem('token',res.token);
        this.jwtService.getUserDetails();
        this.router.navigate(['/search']);
      },
      err => {
        console.log(err);
      } 
    )
  }

}
