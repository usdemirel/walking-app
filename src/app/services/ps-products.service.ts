import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagenation } from '../model/pagenation';
import { ProductDetails } from '../model/product-details';


@Injectable({
  providedIn: 'root'
})
export class PSProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Pagenation>("http://localhost:8090/api/productdescriptions/public");
  }

  


}
