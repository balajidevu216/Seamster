import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { IndexComponent } from './index/index.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@NgModule({
  declarations: [
       IndexComponent,
       AddproductComponent
  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
	  FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
