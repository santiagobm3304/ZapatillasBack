import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product.model';

@Pipe({
  name: 'filtroProduct'
})
export class FiltroProductPipe implements PipeTransform {

  transform(products: Product[], search: string = ''): Product[] {

    
    const filtrandoProduct = products.filter(product => product.name.includes(search));
    return filtrandoProduct
  }

}
