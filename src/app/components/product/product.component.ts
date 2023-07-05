import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product.model';
import { CartService } from 'src/app/services/cart.service';
import { GetProductsService } from 'src/app/services/get-products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;
  id: number = 0
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: GetProductsService
  ){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      console.log(this.id);
      this.obtenerProductId(this.id)
    })
  }
  obtenerProductId(id: number){
    this.product = this.productService.getProductId(id)
  }

  agregarProduct(idProduct: any) {
    this.cartService.addProduct(idProduct)
  }
}
