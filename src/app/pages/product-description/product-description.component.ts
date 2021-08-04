import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockDto } from 'src/app/model/stock-dto';
import { JwtClientService } from 'src/app/services/jwt-client.service';
import { OrderService } from 'src/app/services/order.service';
import { StockCstService } from 'src/app/services/stock-cst.service';
 
@Component({
 selector: 'app-product-description',
 templateUrl: './product-description.component.html',
 styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit, OnChanges {
 
 @Input() id;
 product: StockDto;
 currentPrice: number;
 chosenStockId: number;
 quantity: number=0;
 
/*
 product = {
 
   productDescription : {
     id : 100,
     title : "Adidas T_Shoe",
     description : " great shoes; stylish, affordable, not cheap the least",
     image : "./../../assets/product.png",
     keyWords : "key",
     brand : "adidas",
     category : {
         id : 1,
         category : "shoes",
         image : "image",
         active : true,
    },
     rating : 4.5,
     reviewCount : 32,
     minPrice : 17.01,
     maxPrice : 19.99,
     active : true,
},
 stockDetailsList : [{
         id : 13,
         price : 15.49,
         quantity : 100,
         branch : {
             id : 1,
             branchName : "West Cost",
             address : {
                 id : 10,
                 addressee : "Serkan Demirel",
                 civicAddress : "12 West Cost",
                 municipality : "CA",
                 province : "PA",
                 postalCode : "23345"
            },
             active : true,
        },
         size : 1,
         maxOrderQuantity : 5,
    }]
 }
 
*/
 
 
 
 constructor(private stockService: StockCstService, private route: ActivatedRoute, private orderService: OrderService, public jwtService: JwtClientService) { }
 
 ngOnInit(): void {
  this.route.paramMap.subscribe(param => {
    this.id = param.get("id");
  });
  this.getStocks();

 }
 
 ngOnChanges(): void {
  this.route.paramMap.subscribe(param => {
    this.id = param.get("id");
  });
  this.getStocks();
 }
 
 getStocks(){
   console.log(this.id);
   this.stockService.getStocksByProductDescriptionId(this.id).subscribe( stock => {
     console.log(stock);
     this.product = stock;
   })
 }
 
 selectSize(event){
   let size = event.target.value;
   for( let stockDetails of this.product.stockDetailsList){
     if(size == stockDetails.size){
       this.currentPrice = stockDetails.price;
       this.chosenStockId = stockDetails.id;
     }
   }
 };
 
 addToCart(){
   console.log("submit order for chosenStockId " + this.quantity + " and id is: " + this.chosenStockId);

   let orderItem = {
     stock: {
       id: this.chosenStockId
     },
     quantity: this.quantity,
     customer: {
       id: this.jwtService.user.id,
     },
     paidSubtotal: this.currentPrice * this.quantity,
     order: null
   };

   this.orderService.addToCart(orderItem).subscribe( item => {
     console.log("item: " + item);
   });
 }
 
 // later(){
 //   public class OrderItems implements Serializable {
 //     private Stock stock;
 //     private int quantity;
 //     private Customer customer;
 //     private double paidSubtotal;
 //     private Orders order;
 // }
 // }
 
}
