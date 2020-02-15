
import { Product } from './product.models';

// Classe des produits
export class BasketItem {

// Déclaration des propriétés
product : Product;
quantity: number;


 // constructeur
 constructor (
     product,
     quantity
   ){
   this.product = product;
   this.quantity = quantity;

 }

}
