import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/model/product-details';

@Component({
  selector: 'app-ps-product-card',
  templateUrl: './ps-product-card.component.html',
  styleUrls: ['./ps-product-card.component.css']
})
export class PsProductCardComponent implements OnInit {
  @Input() product: ProductDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
