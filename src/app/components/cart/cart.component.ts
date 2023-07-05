import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { GetProductsService } from 'src/app/services/get-products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any = []
  myProducts: any = []
  priceProducts: any = []
  total: number = 0

  constructor(
    private cartService: CartService,
    private productService: GetProductsService,
    private cdr: ChangeDetectorRef
  ) { }
  ngOnInit(): void {  
    this.cdr.detectChanges()

    this.products = this.productService.getProductos()
    this.myProducts = this.cartService.getAllProducts()
    this.getTotal()
  }

  eliminarProduct(productId: number){
    console.log(productId)
    this.cartService.deleteProduct(productId)
  }
  getTotal() {
    this.total = this.products.reduce((total: any, prod: { id: any; price: any; }) => {
      if (this.myProducts.includes(prod.id)) {
        return total + prod.price;
      } else {
        return total;
      }
    }, 0);
  }

}
