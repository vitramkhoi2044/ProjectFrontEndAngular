import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';
import { NodeProduct, Product } from 'src/app/models/models';

@Component({
  selector: 'app-form-update-product-nodejs',
  templateUrl: './form-update-product-nodejs.component.html',
  styleUrls: ['./form-update-product-nodejs.component.css']
})
export class FormUpdateProductNodejsComponent implements OnInit {
  insertForm: FormGroup
  product: Product[] = [];

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
    this.service.getList().subscribe((data) => {
      this.product = data.filter(function(data){
        return data.Product_Id === Number(sessionStorage.getItem('IdProductUpdateNodeJS'));
      });
      //set Value for Form
      this.insertForm.controls["Product_Name"].setValue(this.product[0].Product_Name);
      this.insertForm.controls["Brand"].setValue(this.product[0].Brand);
      this.insertForm.controls["Type"].setValue(this.product[0].Type);
      this.insertForm.controls["Color"].setValue(this.product[0].Color);
      this.insertForm.controls["Ram"].setValue(this.product[0].Ram);
      this.insertForm.controls["Memory"].setValue(this.product[0].Memory);
      this.insertForm.controls["Price"].setValue(this.product[0].Price);
      this.insertForm.controls["Warranty"].setValue(this.product[0].Warranty);
      this.insertForm.controls["Quantity"].setValue(this.product[0].Quantity);
      this.insertForm.controls["Status"].setValue(this.product[0].Status);
    });
  }
  onUpdate(){
    let product = new NodeProduct();
    product.Product_Id = Number(sessionStorage.getItem("IdProductUpdateNodeJS"));
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
    let id: string = String(sessionStorage.getItem("IdProductUpdateNodeJS")) 
    this.service.updateProduct(product,id).subscribe((data) => {this.router.navigate(["/home/tablenodejs"])});
  }

}
