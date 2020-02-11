
// Classe des produits
export class Product {
 // constructeur
 constructor(
   public id: number,
   public name: string,
   public price: number,
   public image: string,
   ){
   this.id = id;
   this.name = name;
   this.price = price;
   this.image = image;
 }

}
