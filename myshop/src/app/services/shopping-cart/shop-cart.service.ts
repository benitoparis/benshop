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


  // Méthode qui ajoute un nouvel item dans le panier
  createBasketItem(item: BasketItem){
    console.log('itemsInTheBasket', this.itemsInTheBasket);
    //this.itemsInTheBasket.next(item);
    this.itemsInTheBasket.push(item);
  }

  // Méthode pour vider le panier
  emptyBasket(){
  }

  // Récupère les items
  getitemsInTheBasket() {
    console.log('this.itemsInTheBasket la', this.itemsInTheBasket);
    return this.itemsInTheBasket;
  }


  ngOnDestroy() {
    console.log('ShopCartService se ferme');
  }
}
