import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  @Input() item: any;
  @Output() public onDeleteItem: EventEmitter<number> = new EventEmitter();

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
  }

  delete(id: number){
    console.log("id to be transmitted: "+id);
    this.onDeleteItem.emit(id);

    // this.orderService.deleteCartItem(id).subscribe( data => {
    //   console.log(data);
    //   this.onDeleteItem.emit("deleted");
    // });
  }

}
