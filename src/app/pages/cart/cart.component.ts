import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getActiveCartItems();
  }

  getActiveCartItems(){
    this.orderService.retrieveCartItems().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }

}
