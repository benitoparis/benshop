import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { shopProductsDetailsComponent } from '../components/shop-product-details/shop-products.component';


const appRoutes: Routes = [
  { path: 'products', component: shopProductsComponent, data: { title: 'Heroes List' } },
  { path: 'product/:id', component: HeroDetailComponent },
  {
    path: 'shopping-cart',
    component: HeroListComponent,
    data: { title: 'Shopping Cart' }
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
