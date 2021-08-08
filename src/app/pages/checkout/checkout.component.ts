import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order: any;
  showProceedtoCheckoutBtn = false;

  constructor(private orderService: OrderService, private router: Router, private toastr: ToastrService) {
    this.retrieveCheckoutDetails();
   }

  ngOnInit(): void {

  }

  retrieveCheckoutDetails(){
    this.orderService.retrieveCheckoutDetails().subscribe(order => {
      console.log("order " + order);
      this.order = order;
    })
  }

  checkout(){
    console.log("checkout");
    this.orderService.checkout(this.order.customer).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("/cart");
        this.toastr.success("You order is successfully placed!");
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured!");
      })
  }


}
