import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AddorderComponent } from '../addorder/addorder.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  form: FormGroup;
  public product = true;
  
  constructor(public productsService: ProductsService,
              private router: Router,
              private dialogRef : MatDialog) { }


  ngOnInit(): void {

    this.form = new FormGroup({
    //  id : new FormControl('', [Validators.required]),
      name: new FormControl('',[ Validators.required,Validators.pattern("^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$")]),
      type: new FormControl('', [Validators.required]),
    });
  }
  openDialogg(){
    this.dialogRef.open(AddorderComponent);
    this.product = false;
  }
  
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.productsService.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('products/index');
         confirm("Record created successfully!");
    })
}
}


