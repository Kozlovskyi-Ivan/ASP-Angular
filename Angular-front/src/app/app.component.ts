import { Product } from './Product';
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  product: Product = new Product();
  products: Product[];
  tableMode: boolean = true;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.loadProducts();
  }


  loadProducts() {
    this.dataService.getProducts().subscribe((data: Product[]) => this.products = data);
  }

  save() {
    if (this.product.id == null) {
      this.dataService.createProduct(this.product)
        .subscribe((data: HttpResponse<Product>) => {
          console.log(data);
          this.products.push(data.body)
        });
    } else {
      this.dataService.updateProduct(this.product)
        .subscribe(data => this.loadProducts());
    }
    this.cancel();
  }
  editProduct(p: Product) {
    this.product = p;
  }
  cancel() {
    this.product = new Product();
    this.tableMode = true;
  }
  delete(p: Product) {
    this.dataService.deleteProduct(p.id)
      .subscribe(data => this.loadProducts());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }
}
