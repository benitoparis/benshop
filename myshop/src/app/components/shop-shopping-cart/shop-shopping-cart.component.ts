import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-shop-shopping-cart',
  templateUrl: './shop-shopping-cart.component.html',
  styleUrls: ['./shop-shopping-cart.component.css']
})
export class ShopShoppingCartComponent implements OnInit {

  constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
