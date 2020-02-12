import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { shopProductDetailsComponent } from '../components/shop-product-details/shop-products.component';
import { shopProductsListingComponent } from '../components/shop-product-details/shop-products.component';
import { shopShoppingCartComponent } from '../components/shop-product-details/shop-products.component';

const appRoutes: Routes = [

  {
    path: 'category/:id',
    component: XXXX,
  },
  { path: 'product/:id', component: shopProductsListingComponent },

  {
    path: 'shopping-cart',
    component: shopShoppingCartComponent,
    data: { title: 'Shopping Cart' }
  },
  { path: 'home',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
