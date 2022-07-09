import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NodeProduct, Product } from '../../models/models'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getList(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:4000/api/products/getlist");
  }
  addProduct(product: NodeProduct): Observable<NodeProduct[]> {
    const headers = { 'content-type': 'application/json' }
    return this.http.post<NodeProduct[]>('http://localhost:4000/api/products/add', product, { 'headers': headers });
  }
  deleteProduct(id: string) {
    return this.http.delete('http://localhost:4000/api/products/remove/'+id);
  }
  updateProduct(product: NodeProduct, id: string): Observable<NodeProduct[]> {
    const headers = { 'content-type': 'application/json' }
    return this.http.put<NodeProduct[]>('http://localhost:4000/api/products/update/'+id, product, { 'headers': headers });
  }
}
