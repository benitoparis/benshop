import { Component, OnInit } from '@angular/core';
import { Product } from '../../class/product.models';
import { ProductsListService } from '../../services/products-listing/products-list.service';
import { ActivatedRoute} from '@angular/router';

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
    private activeRoute: ActivatedRoute
  )
  { }

  // A l'initialisation
  ngOnInit() {

    this.categories = this.productsListingService.getCategories();

    //On récupère les paramètres d'url
    this.activeRoute.params.subscribe(routeParams => {
      this.categoryId = routeParams['id'];
      this.productId = routeParams['idProduct'] ? routeParams['idProduct'] : null ;

      console.log('this.categoryId', this.categoryId);
      console.log('this.productId', this.productId);

      // On récupère la liste des produits corespondant à la catégorie demandée
      this.filteredProducts = this.productsListingService.getProductsByCategory(this.categoryId);
    });





  }

}
