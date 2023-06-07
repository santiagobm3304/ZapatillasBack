import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  zapatillas = [
  ]
  constructor() { }
  getProductos(){
    return this.zapatillas;
  }
}
