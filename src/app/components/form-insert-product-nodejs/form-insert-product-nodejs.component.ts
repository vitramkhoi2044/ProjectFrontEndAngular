import { NodeProduct } from '../../models/models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-insert-product-nodejs',
  templateUrl: './form-insert-product-nodejs.component.html',
  styleUrls: ['./form-insert-product-nodejs.component.css']
})

export class FormInsertProductNodejsComponent implements OnInit {
  insertForm: FormGroup

  constructor(private fb: FormBuilder, private service: ProductsService, private router: Router) {
    this.insertForm = this.fb.group({
      Product_Name: ['', Validators.required],
      Brand: ['', Validators.required],
      Type: ['', Validators.required],
      Color: ['', Validators.required],
      Ram: ['', Validators.required],
      Memory: ['', Validators.required],
      Price: ['', Validators.required],
      Warranty: ['', Validators.required],
      Quantity: ['', Validators.required],
      Status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){				
    let product = new NodeProduct();
    product.Product_Id = Number(sessionStorage.getItem("TotalProductNodeJS")) + 1;
    product.Product_Name = this.insertForm.controls["Product_Name"].value;
    product.Brand = this.insertForm.controls["Brand"].value;
    product.Type = this.insertForm.controls["Type"].value;
    product.Color = this.insertForm.controls["Color"].value;
    product.Ram = this.insertForm.controls["Ram"].value;
    product.Memory = this.insertForm.controls["Memory"].value;
    product.Price = this.insertForm.controls["Price"].value;
    product.Warranty = this.insertForm.controls["Warranty"].value;
    product.Quantity = this.insertForm.controls["Quantity"].value;
    product.Status = this.insertForm.controls["Status"].value;
    this.service.addProduct(product).subscribe((data) => {this.router.navigate(["/home/tablenodejs"])});
  }
}
