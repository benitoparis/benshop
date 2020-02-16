import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../class/product.models';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  // Déclaration des variables
  @Input() product: Product;
  @Output() addedProduct = new EventEmitter();


  // Constructeur
  constructor(
    // private toastr: ToastrService
  ) { }

  // A l'initialisation
  ngOnInit() {

  }


  // Lorsque l'on clique sur ajouter au panier
  onClickAddProduct(product: Product){
    this.addedProduct.emit(product);
    // this.toastr.success('Votre produit a été ajouté');
  }

}
