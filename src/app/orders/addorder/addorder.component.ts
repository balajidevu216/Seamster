import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddproductComponent } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  public order = true;

  form: FormGroup;
  
  constructor(public ordersService: OrdersService,
              private router: Router,
              private dialogRef : MatDialog) { }
	

  ngOnInit(): void {
    this.form = new FormGroup({
    //  id : new FormControl('', [Validators.required]),
    });
  }
  openDialog(){
    this.dialogRef.open(AddproductComponent);
    this.order = false;
  }
  
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.ordersService.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('products/index');
         confirm("Record created successfully!");
    })
}
}
