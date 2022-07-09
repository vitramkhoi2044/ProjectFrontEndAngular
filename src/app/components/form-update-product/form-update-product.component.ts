import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/models';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-form-update-product',
  templateUrl: './form-update-product.component.html',
  styleUrls: ['./form-update-product.component.css']
})
export class FormUpdateProductComponent implements OnInit {
  private productsCollection: AngularFirestoreCollection<Product>;
  insertForm: FormGroup
  product: Product[] = [];

  constructor(private fb: FormBuilder, private readonly tmp: AngularFirestore, private router: Router) {
    this.productsCollection = this.tmp.collection<Product>('products');
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
    this.productsCollection.valueChanges({ idField: 'docId' }).subscribe((data) => {
      this.product = data.filter(function (data) {
        return data.Product_Id === Number(sessionStorage.getItem('IdProductUpdate'));
      });
      console.log(this.product)
    //set value for form
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
  onUpdate() {
    let data = {
      "Product_Id": Number(sessionStorage.getItem("IdProductUpdate")),
      "Product_Name": this.insertForm.controls["Product_Name"].value,
      "Brand": this.insertForm.controls["Brand"].value,
      "Type": this.insertForm.controls["Type"].value,
      "Color": this.insertForm.controls["Color"].value,
      "Ram": this.insertForm.controls["Ram"].value,
      "Memory": this.insertForm.controls["Memory"].value,
      "Price": this.insertForm.controls["Price"].value,
      "Warranty": this.insertForm.controls["Warranty"].value,
      "Quantity": this.insertForm.controls["Quantity"].value,
      "Status": this.insertForm.controls["Status"].value
    }
    let docId: string = String(sessionStorage.getItem("IdProductUpdate"));
    this.productsCollection.doc(docId).update(Object.assign({}, data)).then(() => { this.router.navigate(["/home/tablefirebase"]) });
  }
}
