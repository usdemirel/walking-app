import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private http: HttpClient, private jwtService: JwtClientService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log("register user..");
    console.log(this.userData);
    this.jwtService.registerCustomer(this.userData).subscribe( user => {
      console.log("Registered -----> " + user);
      this.router.navigateByUrl("/signin");
      this.toastr.success("Registration is successfull");
    },
    err => {
      console.log('error: ' + err.status );
      if(err.status == 409){
        this.toastr.error("An error occured: User already exist with the given email id");
      }else{
        this.toastr.error("An error occured: " + err);
      }
    });
  }

}
