import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../products';
@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  id:string;
  products:Products;
  ProductId: string;

  constructor(
    public productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
) { }

  ngOnInit(): void {
    this.ProductId = this.route.snapshot.params['ProductId'];
    this.id = this.route.snapshot.params['id'];
this.productsService.find(this.id,this.ProductId).subscribe((data: Products)=>{
  console.log('data#', data);
      this.products=data;
  });
}
}
