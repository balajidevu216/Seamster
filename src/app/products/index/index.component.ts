import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { ActivatedRoute, Router } from '@angular/router';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { MatDialog } from '@angular/material/dialog';
import { AddorderComponent } from 'src/app/orders/addorder/addorder.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
products: Products[] = [];
loading: boolean = false;

  constructor(public productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef : MatDialog) {}


    openDialog(){
      this.dialogRef.open(AddproductComponent);
    }
    
    openDialogg(){
      this.dialogRef.open(AddorderComponent)
    }
  ngOnInit(): void {
this.productsService.getAll().subscribe((data: Products[])=>{
      this.products = data;
      console.log(this.products);
  });
  {
  this.loading = true;
  this.productsService.getAll().subscribe((data: Products[])=>{
    this.loading = false;
        this.products = data;
        console.log(this.products);
    });
   }
  }
}
