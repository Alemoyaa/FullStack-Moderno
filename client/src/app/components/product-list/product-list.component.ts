import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private service: ProductService) { }

  products: Product[];

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getProducts()
      .subscribe(
        res => this.products = res,
        err => console.log(err)
      )
  }

}
