import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtClientService } from './jwt-client.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JwtClientService, private router: Router){}

  canActivate(): boolean {
    if(this.jwtService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/signin']);
      return false;
    }
  }
  
}
