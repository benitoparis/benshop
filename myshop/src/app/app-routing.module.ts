import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopProductDetailsComponent } from './components/shop-product-details/shop-product-details.component';
import { ShopProductsListingComponent } from './components/shop-products-listing/shop-products-listing.component';
import { ShopShoppingCartComponent } from './components/shop-shopping-cart/shop-shopping-cart.component';

const appRoutes: Routes = [

  { path: '',
    redirectTo: 'category/boissons', pathMatch: 'full'
  },
  {
    path: 'category',
    component: ShopProductsListingComponent,
  },
  {
    path: 'category/:id',
    component: ShopProductsListingComponent,
  },
  {
    path: 'category/:id/product/;productid',
    component: ShopProductDetailsComponent,
  },
  {
    path: 'shopping-cart',
    component: ShopShoppingCartComponent,
    data: { title: 'Shopping Cart' }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
