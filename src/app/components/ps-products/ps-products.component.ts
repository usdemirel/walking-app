import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagenation } from 'src/app/model/pagenation';
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
  pagination: Pagenation;

  constructor(private productsService : PSProductsService, private route: ActivatedRoute) { }

  ngOnChanges(): void {
    console.log("about to get products")
    console.log(this.category);
    
      if(this.result!=null){
        this.getProductsByQueryParam(this.result);
      }else if(this.category!=null && this.category!="All"){
      this.getProductsByCategory(this.category);
      }else{
          this.getProducts();
      }
  }

  getProducts(){
    this.productsService.getProducts().subscribe(pagenation => {
      console.log("---> " + pagenation);
      this.productDetails = pagenation.content;
      this.pagination=pagenation;
      console.log("-> " + pagenation.content);
    })
  }

  getProductsByCategory(category){
    this.productsService.getProductsByCategory(category).subscribe(pagenation => {
      console.log("------> " + pagenation);
      this.pagination=pagenation;
      this.productDetails = pagenation.content;
    })
  }

  getProductsByQueryParam(param){
    this.productsService.getProductsByQueryParam(param).subscribe(pagenation => {
      console.log("----=-----> " + pagenation.size);
      this.pagination=pagenation;
      this.productDetails = pagenation.content;
      console.log("totalPages: " + this.pagination.totalPages + "totalElements: " + this.pagination.totalElements + "size: " + this.pagination.size + "number: " + this.pagination.number)
    })
  }

}
