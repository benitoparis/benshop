import { Injectable } from '@angular/core';
import { Product } from '../../class/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  dataFromBackEnd = {
   "categories":[
      {
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
  };
  categoryList: String[];
  allProducts: Product[];


  constructor() { }

  // Méthode qui récupère la liste des catégories
  getCategories(){
    this.categoryList = this.dataFromBackEnd.categories;
  }

  // Méthode qui renvoie tous les produits du par catégorie
  getProductsByCategory(categoryName: string): any {
    return this.categoryList.find(cat => {
        return cat.name === categoryName;
    }).products;
  }

  // Récupère tous les produits peu importe la catégorie
  getAllProducts(): []Products {
    this.categoryList.forEach(elem => {
       elem.products.forEach(product => {
         this.allProducts.push(new Product(product, elem.name));
       })
    });
  }
}
