import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddorderComponent } from './addorder/addorder.component';

const routes: Routes = [
  { path: 'orders', redirectTo: 'orders/index', pathMatch: 'full'},
  { path: 'orders/index', component: IndexComponent },
  { path: 'orders/addorder', component: AddorderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
