import { Product } from './../Product';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [DataService]
})
export class ProductDetailComponent implements OnInit {

  id: number;
  product: Product;
  loaded: boolean = false;

  constructor(private dataService: DataService, activeRoute: ActivatedRoute) {
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
  }

  ngOnInit() {
    if (this.id) {
      this.dataService.getProduct(this.id)
        .subscribe((data: Product) => { this.product = data; this.loaded = true; });
    }
  }

}
