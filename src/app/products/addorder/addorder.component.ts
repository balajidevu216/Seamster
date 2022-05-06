import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  public order = true;

  form: FormGroup;
  
  constructor(public productsService: ProductsService,
              private router: Router,
              private dialogRef : MatDialog) { }
	

  ngOnInit(): void {
    this.form = new FormGroup({
    //  id : new FormControl('', [Validators.required]),
    });
  }
  openDialog(){
    this.dialogRef.open(AddorderComponent);
    this.order = false;
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
