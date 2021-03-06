import { Product } from './../Product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
