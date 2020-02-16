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

  // Déclaration des variables
  itemsList: BasketItem[];
  categories = [];
  total = 0;

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

    this.getTotalPrice();

  }


  // Supprimer un item du panier
  removeItem(index: number){
    this.shopCartService.removeItemFromBasket(index);
  }

  // Au changement de quantité
  onChangeQuantity(itemIndex, event){
    const items = this.shopCartService.getitemsInTheBasket();
     const item = items[itemIndex];
     item.quantity = event.target.value;
     this.getTotalPrice();

  }

  // Récupère le montant total du panier
  getTotalPrice(){
    this.total = this.shopCartService.getTotalPrice();
  }


}
