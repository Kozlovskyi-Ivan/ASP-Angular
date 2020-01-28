import { Product } from './../Product';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [DataService]
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe((data: Product[]) => this.products = data);
  }

}
