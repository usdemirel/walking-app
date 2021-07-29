import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/model/product-details';
import { PSProductsService } from 'src/app/services/ps-products.service';

@Component({
  selector: 'app-ps-products',
  templateUrl: './ps-products.component.html',
  styleUrls: ['./ps-products.component.css']
})
export class PsProductsComponent implements OnInit {
  category: string ="";
  productDetails: ProductDetails[] = [];

  constructor(private productsService : PSProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("about to get products")
    this.getProducts();
  }

  getProducts(){
    this.productsService.getProducts().subscribe(pagenation => {
      console.log("---> " + pagenation);
      this.productDetails = pagenation.content;
      console.log("-> " + pagenation.content);
    })
  }

}
