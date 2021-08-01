import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let jwtService = this.injector.get(JwtClientService);
    if(!localStorage.getItem('token')){
      console.log("sending original request..");
      return next.handle(req);
    }
    console.log("tokenized req will be generated..");
    let tokenizedReq = req.clone({
        setHeaders:{
        Authorization: `Bearer ${jwtService.getToken()}`
        }
    });
    return next.handle(tokenizedReq);
  }
}
