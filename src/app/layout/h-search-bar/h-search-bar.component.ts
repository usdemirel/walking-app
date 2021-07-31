import { Route } from '@angular/compiler/src/core';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-h-search-bar',
  templateUrl: './h-search-bar.component.html',
  styleUrls: ['./h-search-bar.component.css']
})
export class HSearchBarComponent implements OnInit {
  title:string;
  category:string;
  result:string;
  minPrice:number;
  maxPrice:number;

  constructor(private router: Router, private ref: ChangeDetectorRef, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  appendParams(){
    let result = ('?'
    + (this.title?"title="+this.title:"")
    + (this.category?"&category="+ this.category :"")
    + (this.minPrice?"&minPrice="+this.minPrice:"")
    + (this.maxPrice?"&maxPrice="+this.maxPrice:"")
    );
    console.log("appending:> " + result);
    return result;
  }

  onChange(){
    console.log("search bar value: " + this.title);
    // this.router.navigateByUrl("/search?title="+this.title);
    // this.ref.detectChanges();
    this.route.queryParams.subscribe(data => {
      this.category = data.category;
      this.result = data.result;
      this.minPrice = data.minPrice;
      this.maxPrice = data.maxPrice;
    });
    // const uri = "/search" + this.appendParams();
    // console.log("uri" + uri);
    this.router.navigateByUrl("/search" + this.appendParams());
    // this.router.navigateByUrl("/search?title="+this.title+"&"+this.result);
  }

}
