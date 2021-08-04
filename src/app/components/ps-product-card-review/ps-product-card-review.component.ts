import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-ps-product-card-review',
  templateUrl: './ps-product-card-review.component.html',
  styleUrls: ['./ps-product-card-review.component.css']
})
export class PsProductCardReviewComponent implements OnChanges {

  @Input() reviewCount:number;
  @Input() rating:number;
  ratingImage: string="";

  constructor() { }

  ngOnChanges(): void {
    this.ratingImage = this.rating.toFixed();
  }

}
