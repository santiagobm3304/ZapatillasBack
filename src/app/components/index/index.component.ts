import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/get-products.service';
import { Product } from 'src/app/product.model';
import { map } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  products: any = [];
  product: any
  search: string = ''
  constructor (
    private productosService: GetProductsService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.products = this.productosService.getProductos()
    // .pipe(
    //   map(products => products
    //     .map(product => (
    //       { 
    //         id: product._id,
    //       })))
    // ).subscribe(
    //   res => {
    //     this.products = res;
    //   },
    //   err => console.log(err)
    // )
  }

  onSearchProduct(search: string) {
    this.search = search
  }
}
