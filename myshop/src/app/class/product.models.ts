
// Classe des produits
export class Product {

// Déclaration des propriétés
id : number;
name: string;
price: number;
image: string;
category: string;
tva: number;

 // constructeur
 constructor (
     product,
     categoryName
   ){
   this.id = product.id;
   this.name = product.name;
   this.price = product.price;
   this.image = product.image;
   this.tva = product.tva;
   this.category = categoryName;
 }

}
