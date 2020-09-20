import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product.entity';
import { ProductService } from '@app/_services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  private products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
	}

}
