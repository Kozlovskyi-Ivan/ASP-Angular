import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { Product } from './../Product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = new Product();
  constructor(private dataService: DataService, private router: Router) { }

  save() {
    this.dataService.createProduct(this.product).subscribe(data => this.router.navigateByUrl("/"));
  }
}
