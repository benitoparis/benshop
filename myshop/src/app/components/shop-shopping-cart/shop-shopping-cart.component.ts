import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { BasketItem } from '../../class/basket-Item.models';

@Component({
  selector: 'app-shop-shopping-cart',
  templateUrl: './shop-shopping-cart.component.html',
  styleUrls: ['./shop-shopping-cart.component.css']
})
export class ShopShoppingCartComponent implements OnInit {

  // Déclaration des variables
  itemsInTheBasket : BasketItem[];

  // Constructeur
  constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  // Méthode qui ajoute un nouvel item dans le panier
  createBasketItem(item: BasketItem){
    this.itemsInTheBasket.push(item);
  }

  // Méthode pour vider le panier
  emptyBasket(){
    this.itemsInTheBasket = [];
  }

}
