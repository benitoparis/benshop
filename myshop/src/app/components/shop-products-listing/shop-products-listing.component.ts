import { Component, OnInit } from '@angular/core';
import { Product } from '../../class/product.models';


@Component({
  selector: 'app-shop-products-listing',
  templateUrl: './shop-products-listing.component.html',
  styleUrls: ['./shop-products-listing.component.css']
})
export class ShopProductsListingComponent implements OnInit {

  filteredProducts: Product[];

  constructor(
    private productsListingService : ProductsListService,
  )
  { }

  ngOnInit() {
  }

}
