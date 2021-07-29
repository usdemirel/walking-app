import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/categories';
import { PSFiltersService } from 'src/app/services/ps-filters.service';

@Component({
  selector: 'app-ps-filters',
  templateUrl: './ps-filters.component.html',
  styleUrls: ['./ps-filters.component.css']
})
export class PsFiltersComponent implements OnInit {

  categories: Categories[] = [];

  constructor(private filtersService: PSFiltersService) { }

  ngOnInit(): void {
    console.log("init")
    this.getCategories();
  }

  getCategories(){
    this.filtersService.getCategories().subscribe( data => {
      this.categories = data;
      console.log("data " + data);
    });
  }

}
