import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IndexComponent } from './index/index.component';
import { AddorderComponent } from './addorder/addorder.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@NgModule({
  declarations: [
       IndexComponent,
       AddorderComponent,
       ViewdetailsComponent,
       AddproductComponent
  ],
  imports: [
    OrdersRoutingModule,
    CommonModule,
	  FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
