import { Injectable } from '@angular/core';
import { BasketItem } from '../../class/basket-Item.models';
import { Subject,ReplaySubject, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  itemsInTheBasket : BasketItem[] = [];
  //ReplaySubject<any[]> = new ReplaySubject(1435454);

  constructor() {
    console.log('creation du service ShopCartService');
  }


  // Méthode qui ajoute un nouvel article dans le panier
  createBasketItem(item: BasketItem){
    //this.itemsInTheBasket.next(item);
    this.itemsInTheBasket.push(item);
  }

  // Méthode pour vider le panier
  emptyBasket(){
  }

  // Récupère les items
  getitemsInTheBasket() {
    return this.itemsInTheBasket;
  }

  // Méthode qui permet de supprimer un article du panier
  removeItemFromBasket(index: number){
    this.itemsInTheBasket.splice(index, 1);
  };

  // Méthode qui calcule le prix total
  getTotalPrice(){
    let totalPrice = 0;
    this.itemsInTheBasket.forEach(item=> {
      totalPrice +=(item.product.price * item.quantity);
    });
    return totalPrice;
  }


  ngOnDestroy() {
    console.log('ShopCartService se ferme');
  }
}
