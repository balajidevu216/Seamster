import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IndexComponent } from './index/index.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
       IndexComponent,
       AddproductComponent
  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    MatDialogModule,
	  FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
