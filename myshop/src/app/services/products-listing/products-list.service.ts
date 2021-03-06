import { Injectable } from '@angular/core';
import { Product } from '../../class/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  categoryList: any;
  allProducts: Product[];
  data: any;
  dataFromBackEnd = {
     "categories":[
        {
           "id": 1,
           "name":"Boissons",
           "products":[
              {
                 "id":81,
                 "name":"Coca-Cola 50cl",
                 "price":4,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Coca-Cola"
              },
              {
                 "id":72,
                 "name":"Fanta 50cl",
                 "price":3,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Fanta"
              },
              {
                 "id":63,
                 "name":"Sprite 50cl",
                 "price":3.5,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Sprite"
              },
              {
                 "id":54,
                 "name":"Orangina 50cl",
                 "price":3,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Orangina"
              }
           ]
        },
        {
           "id":2,
           "name":"Sandwich",
           "products":[
              {
                 "id":35,
                 "name":"Jambon beurre",
                 "price":6,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Jambon beurre"
              },
              {
                 "id":26,
                 "name":"Baguette Poulet Crudités",
                 "price":7,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Baguette Poulet Crudités"
              },
              {
                 "id":17,
                 "name":"Hot-Dog",
                 "price":7,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Hot-Dog"
              }
           ]
        },
        {
           "id": 3,
           "name":"Snacks",
           "products":[
              {
                 "id":58,
                 "name":"Chips 45g",
                 "price":2.5,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Chips"
              },
              {
                 "id":49,
                 "name":"M&M's 100g",
                 "price":3,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=MM's"
              },
              {
                 "id":310,
                 "name":"Twix",
                 "price":1.5,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Twix"
              },
              {
                 "id":211,
                 "name":"Mars",
                 "price":1.5,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Mars"
              },
              {
                 "id":112,
                 "name":"Snickers",
                 "price":1.5,
                 "tva":10,
                 "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Snickers"
              }
           ]
        }
     ]
  }

  // Constructeur
  constructor() {


    this.data = JSON.stringify(this.dataFromBackEnd);
    this.data = JSON.parse(this.data);

    this.getCategories();

  }

  // Méthode qui récupère la liste des catégories
  getCategories(){
    return this.categoryList = this.data['categories'];
  }

  // Méthode qui renvoie tous les produits d'une catégorie spécifique
  getProductsByCategory(categoryName: string): any {
    return this.categoryList.find(cat => {
        return cat['name'].toLowerCase() === categoryName.toLowerCase();
    })['products'];
  }

  // Récupère tous les produits peu importe la catégorie
  getAllProducts(): Product[] {
    let allProducts = [];
    this.categoryList.forEach(cat => {
       cat['products'].forEach(product => {
         // On créee une instance de product et on l'ajoute au tableau
         allProducts.push(new Product(product, cat['name']));
       });
    });
    return allProducts;
  }
}
