import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletemodalnodejs',
  templateUrl: './deletemodalnodejs.component.html',
  styleUrls: ['./deletemodalnodejs.component.css']
})
export class DeletemodalnodejsComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }
  onDelete() {
    let productID: string = String(sessionStorage.getItem('IdProductDeleteNodeJS'));
    this.service.deleteProduct(productID).subscribe((data) => {
      this.messageEvent.emit('deleteSuccessful');
    });
    (document.getElementById('closebutton') as HTMLInputElement).click();
  }
}
