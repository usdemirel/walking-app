import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  addressData: {
    id?:number
    addressee?:string;
    civicAddress?:string;
    municipality?:string;
    province?:string;
    postalCode?:string;
  } = {};

  constructor(private jwtService: JwtClientService, private toastr: ToastrService) {
   }


  ngOnInit(): void {
    this.jwtService.retrieveUserDetails().subscribe( user => {
      this.user = user;
    });
    console.log("user details:" + this.user);
    
  }

  addAddress(){
    this.jwtService.addAddress(this.addressData).subscribe(user => {
      this.user = user;
    },
    err => {
      this.toastr.error("An error occured!");
    })
    console.log("add address is clicked! ");
    console.log(this.addressData);
  }

}
