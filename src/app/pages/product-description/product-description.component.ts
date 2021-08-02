import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockDto } from 'src/app/model/stock-dto';
import { StockCstService } from 'src/app/services/stock-cst.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit, OnChanges {

  @Input() id;
  product: StockDto;

  constructor(private stockService: StockCstService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {
      this.id = param.get("id");
    })

    console.log(this.id);
    this.getStocks();
  }

  ngOnChanges(): void {

  }

  getStocks(){
    console.log(this.id);
    this.stockService.getStocksByProductDescriptionId(this.id).subscribe( stock => {
      console.log(stock);
      this.product = stock;
    })
  }



}
