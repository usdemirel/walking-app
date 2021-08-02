import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockCstService {

  

  constructor(private http:HttpClient) { }

  getStocksByProductDescriptionId(id:number){
    return this.http.get<any>('http://localhost:8090/api/stocks/productdescriptions/1/public');
  }

}
