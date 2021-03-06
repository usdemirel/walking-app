import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/model/categories';
import { PSFiltersService } from 'src/app/services/ps-filters.service';

@Component({
  selector: 'app-ps-filters',
  templateUrl: './ps-filters.component.html',
  styleUrls: ['./ps-filters.component.css']
})
export class PsFiltersComponent implements OnInit {

  category:string;
  result:string;
  minPrice:number;
  maxPrice:number;
  title:string;
  categories: Categories[] = [{"category":"All"}];

  constructor(private filtersService: PSFiltersService, private router: Router, private route: ActivatedRoute) {
    this.category="All"
  }

  appendParams(){
    this.result = ('?'
    + (this.category?"category="+ this.category :"")
    + (this.title?"&title="+this.title:"")
    + (this.minPrice?"&minPrice="+this.minPrice:"")
    + (this.maxPrice?"&maxPrice="+this.maxPrice:"")
    );
    console.log("appending:> " + this.result);
  }

  filterChanged(){
    console.log(this.minPrice +" " + this.maxPrice + " " + this.category);
    this.route.queryParams.subscribe(data =>{
      console.log("++++" + data.title);
      this.title=data.title;
    })
    this.appendParams();
    this.router.navigateByUrl('/search'+this.result);
  }

  ngOnInit(): void {
    console.log("init")
    this.getCategories();
  }

  getCategories(){
    this.filtersService.getCategories().subscribe( data => {
      this.categories = data;
      this.categories.splice(0,0,{"id":100,"category":"All"});
      console.log("data " + data);
    });
  }

  onChange(event){
    this.category = event.target.value;
    this.filterChanged();
  }

}
