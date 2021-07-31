import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagenation } from 'src/app/model/pagenation';

@Component({
  selector: 'app-ps-pagination',
  templateUrl: './ps-pagination.component.html',
  styleUrls: ['./ps-pagination.component.css']
})
export class PsPaginationComponent implements OnInit, OnChanges {
  @Input() pagination : Pagenation;
  pages: any[];

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log("^^^------------>>> ");
    this.pages = new Array(this.pagination.totalPages);
    console.log("^^^>>> " + this.pages);
  }

  goToPage(event){
    let page:number = event.target.value-1;
    this.router.navigate(['../search'], { queryParams: { page: page }, queryParamsHandling: "merge"
  });
  }
}
