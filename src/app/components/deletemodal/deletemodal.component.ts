import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import {Product} from '../../models/models';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.css']
})
export class DeletemodalComponent implements OnInit {
  private productsCollection: AngularFirestoreCollection<Product>;
  products: Product[] = [];

  constructor(private readonly tmp: AngularFirestore) {
    this.productsCollection = this.tmp.collection<Product>('products');
   }

  ngOnInit(): void {
  }
  onDelete(){
    let docId: string = String(sessionStorage.getItem('IdProductDelete'));
    this.productsCollection.doc(docId).delete();
    (document.getElementById('closebutton') as HTMLInputElement).click();
  }
}
