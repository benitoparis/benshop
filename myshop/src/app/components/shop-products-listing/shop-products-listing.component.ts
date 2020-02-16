import { Component, OnInit } from '@angular/core';
import { Product } from '../../class/product.models';
import { ProductsListService } from '../../services/products-listing/products-list.service';
import { ActivatedRoute} from '@angular/router';
import { BasketItem } from '../../class/basket-Item.models';
import { ShopCartService } from '../../services/shopping-cart/shop-cart.service';

@Component({
  selector: 'app-shop-products-listing',
  templateUrl: './shop-products-listing.component.html',
  styleUrls: ['./shop-products-listing.component.css']
})
export class ShopProductsListingComponent implements OnInit {

  // Déclaration des variables
  filteredProducts: Product[];
  categoryId: string;
  productId: string;
  categories: any[];

  // Constructeur
  constructor(
    private productsListingService : ProductsListService,
    private activeRoute: ActivatedRoute,
    private shopCartService: ShopCartService
  )
  { }

  // A l'initialisation
  ngOnInit() {

    this.categories = this.productsListingService.getCategories();

    //On récupère les paramètres d'url
    this.activeRoute.params.subscribe(routeParams => {
      this.categoryId = routeParams['id'];
      this.productId = routeParams['idProduct'] ? routeParams['idProduct'] : null ;

      // On récupère la liste des produits corespondant à la catégorie demandée
      this.filteredProducts = this.productsListingService.getProductsByCategory(this.categoryId);
    });
  }

  // On ajoute un produit dans la liste du panier
  addProduct(product, quantity){
    const item = new BasketItem(product, quantity);
    this.shopCartService.createBasketItem(item);
  }


}


