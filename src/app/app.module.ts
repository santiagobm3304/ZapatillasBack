import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { ProductComponent } from './components/product/product.component';
import { GetProductsService } from './services/get-products.service';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CartComponent } from './components/cart/cart.component';
import { FiltroProductPipe } from './pipes/filtro-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ProductComponent,
    CardProductComponent,
    CartComponent,
    FiltroProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
