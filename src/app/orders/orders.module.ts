import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { IndexComponent } from './index/index.component';
import { AddorderComponent } from './addorder/addorder.component';

@NgModule({
  declarations: [
       IndexComponent,
       AddorderComponent
  ],
  imports: [
    OrdersRoutingModule,
    CommonModule,
	  FormsModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
