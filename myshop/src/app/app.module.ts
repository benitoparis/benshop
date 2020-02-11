import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopProductsListingComponent } from './components/shop-products-listing/shop-products-listing.component';
import { ShopShoppingCartComponent } from './components/shop-shopping-cart/shop-shopping-cart.component';
import { ShopProductDetailsComponent } from './components/shop-product-details/shop-product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopProductsListingComponent,
    ShopShoppingCartComponent,
    ShopProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
