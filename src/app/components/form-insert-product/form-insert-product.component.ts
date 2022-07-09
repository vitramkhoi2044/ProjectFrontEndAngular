import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-insert-product',
  templateUrl: './form-insert-product.component.html',
  styleUrls: ['./form-insert-product.component.css']
})
export class FormInsertProductComponent implements OnInit {
  insertForm: FormGroup
  products: Product[] = [];
  private productsCollection: AngularFirestoreCollection<Product>;

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
  }
  onSubmit() {
    let data = {
      "Product_Id": Number(sessionStorage.getItem("TotalProduct")) + 1,
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
    let docId: string = String(Number(sessionStorage.getItem("TotalProduct")) + 1);
    this.productsCollection.doc(docId).set(Object.assign({}, data)).then(() => { this.router.navigate(["/home/tablefirebase"]) });
  }
}
