import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../model/categories';


@Injectable({
  providedIn: 'root'
})
export class PSFiltersService {

  

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get<Categories[]>('http://localhost:8090/api/categories/public');
  }


}
