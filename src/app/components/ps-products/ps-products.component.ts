import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/model/product-details';
import { PSProductsService } from 'src/app/services/ps-products.service';

@Component({
  selector: 'app-ps-products',
  templateUrl: './ps-products.component.html',
  styleUrls: ['./ps-products.component.css']
})
export class PsProductsComponent implements OnChanges {
  @Input() category: string;
  @Input() result: string;

  productDetails: ProductDetails[] = [];

  constructor(private productsService : PSProductsService, private route: ActivatedRoute) { }

  ngOnChanges(): void {
    console.log("about to get products")
    console.log(this.category);
    if(this.category==null){
      if(this.result!=null){
        this.getProductsByQueryParam(this.result);
      }else{
        this.getProducts();
      }
    }else{
      this.getProductsByCategory(this.category);
    }
    
  }

  getProducts(){
    this.productsService.getProducts().subscribe(pagenation => {
      console.log("---> " + pagenation);
      this.productDetails = pagenation.content;
      console.log("-> " + pagenation.content);
    })
  }

  getProductsByCategory(category){
    this.productsService.getProductsByCategory(category).subscribe(pagenation => {
      this.productDetails = pagenation.content;
    })
  }

  getProductsByQueryParam(param){
    this.productsService.getProductsByQueryParam(param).subscribe(pagenation => {
      this.productDetails = pagenation.content;
    })
  }

}
