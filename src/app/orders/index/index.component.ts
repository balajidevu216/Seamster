import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Orders } from '../orders';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  orders: Orders[] = [];

  constructor(public ordersService: OrdersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
this.ordersService.getAll().subscribe((data: Orders[])=>{
      this.orders = data;
      console.log(this.orders);
  })
};

}
