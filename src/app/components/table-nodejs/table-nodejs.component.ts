import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/models';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-table-nodejs',
  templateUrl: './table-nodejs.component.html',
  styleUrls: ['./table-nodejs.component.css']
})
export class TableNodejsComponent implements OnInit {
  products: Product[] = [];
  config: any;

  constructor(private service: ProductsService, private router: Router,) { }

  ngOnInit(): void {
    this.service.getList().subscribe((data) => {
      this.products = data;
      this.config = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.products.length,
      };
      this.addStoreProduct(this.products);
    });
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }

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
    sessionStorage.setItem("TotalProductNodeJS", totalProducts);
  }

  deleteProduct(id: number) {
    let productID: string = String(id);
    this.service.deleteProduct(productID).subscribe((data) => {
      this.ngOnInit();
    });
  }

  onClickUpdate(id: number) {
    let productID: string = String(id);
    sessionStorage.setItem("IdProductUpdateNodeJS",productID);
    this.router.navigate(["/home/updateproductnodejs"]);
  }

}
