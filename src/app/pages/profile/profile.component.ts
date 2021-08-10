import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  addressData: {
    addressee?:string; 
    civicAddress?:string;
    municipality?:string;
    province?:string;
    postalCode?:string;
  } = {};

  constructor(private jwtService: JwtClientService) {

   }

  ngOnInit(): void {
    this.jwtService.getUserDetails();
    this.user = this.jwtService.user;
    console.log("user details:" + this.user);
  }

  addAddress(){
    console.log("add address is clicked! ");
    console.log(this.addressData);
  }

}
