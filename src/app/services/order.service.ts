import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
 providedIn: 'root'
})
export class OrderService {
 
 constructor(private http: HttpClient) { }
 
 addToCart(orderItem){
   console.log("request: " + orderItem);
   let result = this.http.post<any>("http://localhost:8090/api/orderitems", orderItem);
   return result;
 }

 retrieveCartItems(){
  let result = this.http.get<any>("http://localhost:8090/api/orderitems/null");
  return result;
}


}
