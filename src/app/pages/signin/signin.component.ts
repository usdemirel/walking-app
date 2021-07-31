import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  siginUserData: {email?:string; password?:string;} = {};

  constructor() { }

  ngOnInit(): void {
  }

  signinUser(){
    console.log("sign in user");
    console.log(this.siginUserData)
  }

}
