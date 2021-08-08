import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: any;
  subTotal: number;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getActiveCartItems();
  }

  calculateSubtotal(){
    this.subTotal=0;
    for(let item of this.items){
      this.subTotal += item.paidSubtotal;
    }
  }

  getActiveCartItems(){
    this.orderService.retrieveCartItems().subscribe(items => {
      this.items = items;
      this.calculateSubtotal();
      console.log(items);
    })
  }

  deleteItem(id: number){
    console.log("emitter worked for: " + id);
    this.orderService.deleteCartItem(id).subscribe( data => {
      console.log("deleted: "+data);
      console.log("now will get new items..");
      this.getActiveCartItems();
    });
  }

}
