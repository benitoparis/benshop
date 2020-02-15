import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopProductsListingComponent } from './components/shop-products-listing/shop-products-listing.component';
import { ShopShoppingCartComponent } from './components/shop-shopping-cart/shop-shopping-cart.component';
import { ShopProductDetailsComponent } from './components/shop-product-details/shop-product-details.component';
import { ProductsListService } from './services/products-listing/products-list.service';
import { ShopCartService } from './services/shopping-cart/shop-cart.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
//import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ShopProductsListingComponent,
    ShopShoppingCartComponent,
    ShopProductDetailsComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    //BrowserAnimationsModule,
    //ToastrModule.forRoot()

  ],
  providers: [ProductsListService, ShopCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
