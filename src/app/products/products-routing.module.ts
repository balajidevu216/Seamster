import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  { path: 'products', redirectTo: 'products/index', pathMatch: 'full'},
  { path: 'products/index', component: IndexComponent },
  { path: 'products/addproduct', component: AddproductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
