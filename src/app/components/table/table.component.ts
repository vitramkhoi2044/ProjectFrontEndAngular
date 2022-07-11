import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../../models/models';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  private productsCollection: AngularFirestoreCollection<Product>;
  products: Product[] = [];
  config: any;

  constructor(private readonly tmp: AngularFirestore, private router: Router) {
    this.productsCollection = this.tmp.collection<Product>('products');
    this.productsCollection.valueChanges({ idField: 'docId' }).subscribe(data => {
      this.products = data.sort(function (a: Product, b: Product) {
        if (a.Product_Id > b.Product_Id) return 1;
        else if (a.Product_Id < b.Product_Id) return -1;
        return 0;
      });
      this.config = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.products.length,
      };
      this.addStoreProduct(this.products);
    });
  }

  ngOnInit(): void {
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }

  //change format Price is xxx.xxx.xxx VND
  formatPrice(price: number) {
    let a, b, c, d, e, f, g, h, j;
    a = price % 10;
    price = parseInt(String(price / 10), 0);
    b = price % 10;
    price = parseInt(String(price / 10), 0);
    c = price % 10;
    price = parseInt(String(price / 10), 0);
    d = price % 10;
    price = parseInt(String(price / 10), 0);
    e = price % 10;
    price = parseInt(String(price / 10), 0);
    f = price % 10;
    price = parseInt(String(price / 10), 0);
    g = price % 10;
    price = parseInt(String(price / 10), 0);
    h = price % 10;
    price = parseInt(String(price / 10), 0);
    j = price % 10;
    price = parseInt(String(price / 10), 0);
    if (j != 0) {
      return String(j) + String(h) + String(g) + "." + String(f) + String(e) + String(d) + "." + String(c) + String(b) + String(a);
    }
    return String(h) + String(g) + "." + String(f) + String(e) + String(d) + "." + String(c) + String(b) + String(a);
  }

  addStoreProduct(products: Product[]) {
    let totalProducts: string = String(products.length);
    sessionStorage.setItem("TotalProduct", totalProducts);
  }

  update(id: number) {
    let docId: string = String(id);
    sessionStorage.setItem("IdProductUpdate", docId);
    this.router.navigate(["/home/updateproduct"]);
  }

  delete(id: number) {
    let docId: string = String(id);
    sessionStorage.setItem("IdProductDelete", docId);
  }

  filter() {
    let txtFilter: string = String((document.getElementById('filter') as HTMLInputElement).value)
    if (txtFilter === "All") {
      this.productsCollection.valueChanges({ idField: 'docId' }).subscribe(data => {
        this.products = data.sort(function (a: Product, b: Product) {
          if (a.Product_Id > b.Product_Id) return 1;
          else if (a.Product_Id < b.Product_Id) return -1;
          return 0;
        });
        this.config = {
          itemsPerPage: 3,
          currentPage: 1,
          totalItems: this.products.length,
        };
      })
    }

    else if (txtFilter === "Apple") {
      this.productsCollection.valueChanges({ idField: 'docId' }).subscribe(data => {
        this.products = data.sort(function (a: Product, b: Product) {
          if (a.Product_Id > b.Product_Id) return 1;
          else if (a.Product_Id < b.Product_Id) return -1;
          return 0;
        });
        this.products = this.products.filter(function (product) {
          return String(product.Brand) === String(txtFilter);
        });
        console.log(this.products);
        this.config = {
          itemsPerPage: 3,
          currentPage: 1,
          totalItems: this.products.length,
        };
      });
    }

    else if (txtFilter === "Samsung") {
      this.productsCollection.valueChanges({ idField: 'docId' }).subscribe(data => {
        this.products = data.sort(function (a: Product, b: Product) {
          if (a.Product_Id > b.Product_Id) return 1;
          else if (a.Product_Id < b.Product_Id) return -1;
          return 0;
        });
        this.products = this.products.filter(function (product) {
          return String(product.Brand) === String(txtFilter);
        });
        console.log(this.products);
        this.config = {
          itemsPerPage: 3,
          currentPage: 1,
          totalItems: this.products.length,
        };
      });
    }

    else if (txtFilter === "OPPO") {
      this.productsCollection.valueChanges({ idField: 'docId' }).subscribe(data => {
        this.products = data.sort(function (a: Product, b: Product) {
          if (a.Product_Id > b.Product_Id) return 1;
          else if (a.Product_Id < b.Product_Id) return -1;
          return 0;
        });
        this.products = this.products.filter(function (product) {
          return String(product.Brand) === String(txtFilter);
        });
        console.log(this.products);
        this.config = {
          itemsPerPage: 3,
          currentPage: 1,
          totalItems: this.products.length,
        };
      });
    }

    else if (txtFilter === "Available") {
      this.productsCollection.valueChanges({ idField: 'docId' }).subscribe(data => {
        this.products = data.sort(function (a: Product, b: Product) {
          if (a.Product_Id > b.Product_Id) return 1;
          else if (a.Product_Id < b.Product_Id) return -1;
          return 0;
        });
        this.products = this.products.filter(function (product) {
          return String(product.Status) === String(txtFilter);
        });
        console.log(this.products);
        this.config = {
          itemsPerPage: 3,
          currentPage: 1,
          totalItems: this.products.length,
        };
      });
    }

    else if (txtFilter === "Sold out") {
      this.productsCollection.valueChanges({ idField: 'docId' }).subscribe(data => {
        this.products = data.sort(function (a: Product, b: Product) {
          if (a.Product_Id > b.Product_Id) return 1;
          else if (a.Product_Id < b.Product_Id) return -1;
          return 0;
        });
        this.products = this.products.filter(function (product) {
          return String(product.Status) === String(txtFilter);
        });
        console.log(this.products);
        this.config = {
          itemsPerPage: 3,
          currentPage: 1,
          totalItems: this.products.length,
        };
      });
    }

    else if (txtFilter === "Upcoming") {
      this.productsCollection.valueChanges({ idField: 'docId' }).subscribe(data => {
        this.products = data.sort(function (a: Product, b: Product) {
          if (a.Product_Id > b.Product_Id) return 1;
          else if (a.Product_Id < b.Product_Id) return -1;
          return 0;
        });
        this.products = this.products.filter(function (product) {
          return String(product.Status) === String(txtFilter);
        });
        console.log(this.products);
        this.config = {
          itemsPerPage: 3,
          currentPage: 1,
          totalItems: this.products.length,
        };
      });
    }
  }
}
