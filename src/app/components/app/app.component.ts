import { Component, ViewEncapsulation } from '@angular/core';

import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  public products: Array<Product> = [];

  constructor(private productService: ProductService ) {
    this.products = this.productService.getProducts();
  }

}
