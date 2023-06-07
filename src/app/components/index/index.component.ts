import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/get-products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  products = [
    { id: 1, name: "Adidas", description: "zapatillas deportivas", categoria: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 2, name: "Adidas", description: "zapatillas deportivas", categoria: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 3, name: "Adidas", description: "zapatillas deportivas", categoria: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 3, name: "Adidas", description: "zapatillas deportivas", categoria: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 3, name: "Adidas", description: "zapatillas deportivas", categoria: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 3, name: "Adidas", description: "zapatillas deportivas", categoria: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 3, name: "Adidas", description: "zapatillas deportivas", categoria: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 3, name: "Adidas", description: "zapatillas deportivas", categoria: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
  ]
  constructor (
    private productosService: GetProductsService
  ) {}

}
