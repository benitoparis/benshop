import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { BasketItem } from '../../class/basket-Item.models';
import { ShopCartService } from '../../services/shopping-cart/shop-cart.service';
import { ProductsListService } from '../../services/products-listing/products-list.service';

@Component({
  selector: 'app-shop-shopping-cart',
  templateUrl: './shop-shopping-cart.component.html',
  styleUrls: ['./shop-shopping-cart.component.css']
})
export class ShopShoppingCartComponent implements OnInit {

  itemsList: BasketItem[];
  categories = [];

  // Constructeur
  constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private shopCartService: ShopCartService,
   private productsListService: ProductsListService
   ) { }

  ngOnInit() {

    this.categories = this.productsListService.getCategories();

    this.itemsList = this.shopCartService.getitemsInTheBasket();

  }




}
