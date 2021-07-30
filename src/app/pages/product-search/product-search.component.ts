import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  category = "";
  title = "";
  minPrice = "0";
  maxPrice = "10000";
  page = "0";
  size = "10";
  sortby = "";
  result: string;

  appendParams(){
    console.log("title: " + this.title);
    this.result = ('?' 
    + (this.category?"category="+ this.category :"") 
    + (this.title?"&title="+this.title:"")
    + (this.minPrice?"&minPrice="+this.minPrice:"")
    + (this.maxPrice?"&maxPrice="+this.maxPrice:"")
    + (this.page?"&page="+this.page:"")
    + (this.size?"&size="+this.size:"")
    + (this.sortby?"&sortby="+this.sortby:"")
    );
    console.log("appending:> " + this.result);
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(data => {
      console.log(data);
      this.category = data.category;
      this.title = data.title;
      this.minPrice = data.minPrice;
      this.maxPrice = data.maxPrice;
      this.page = data.page;
      this.size = data.size;
      this.sortby = data.sortby;
      this.appendParams();
    });
   }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      console.log("expecting keys..\n " + params.keys);
      console.log("expecting category..\n " + params.get("category"));
      this.category = params.get("category");
    });
  }

}
