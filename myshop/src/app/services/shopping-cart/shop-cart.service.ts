import { Injectable } from '@angular/core';
import { BasketItem } from '../../class/basket-Item.models';


@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

   // Déclaration des variables
  itemsInTheBasket : BasketItem[] = [];

  constructor() { }


  // Méthode qui ajoute un nouvel item dans le panier
  createBasketItem(item: BasketItem){
    console.log('itemsInTheBasket', this.itemsInTheBasket);
    this.itemsInTheBasket.push(item);

  }

  // Méthode pour vider le panier
  emptyBasket(){
    this.itemsInTheBasket = [];
  }

  // Récupère les items
  getitemsInTheBasket(){
    return this.itemsInTheBasket;
  }
}
