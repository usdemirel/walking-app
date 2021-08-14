import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdCategoriesService {

  constructor(private http: HttpClient) { }

  retrieveCategories(){
    let result = this.http.get<any>("http://localhost:8090/api/categories");
    return result;
  }

  saveCategory(category){
    let result = this.http.post<any>("http://localhost:8090/api/categories", category);
    return result;
  }



}
