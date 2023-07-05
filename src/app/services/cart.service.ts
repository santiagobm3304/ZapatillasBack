import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  arrayProducts: any[] = []
  URL = ''
  total: number =  0
  constructor() {

  }

  addProduct(product: any) {
    console.log(product)
    this.arrayProducts.push(product);
    console.log(this.arrayProducts)
  }

  // Operación de lectura (Obtener todos los productos)
  getAllProducts() {
    return this.arrayProducts;
  }

  
  // Operación de eliminación (Eliminar un producto)
  deleteProduct(id: number) {
    this.arrayProducts.splice(id, 1);
  }

  // getTotal(total: number) {
  //   this.total.reduce((total: any, prod: { id: any; price: any; }) => {
  //     if (this.arrayProducts.includes(prod.id)) {
  //       return total + prod.price;
  //     } else {
  //       return total;
  //     }
  //   }, 0);
  // }
}
