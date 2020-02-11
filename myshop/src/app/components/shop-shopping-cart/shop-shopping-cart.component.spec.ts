import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopShoppingCartComponent } from './shop-shopping-cart.component';

describe('ShopShoppingCartComponent', () => {
  let component: ShopShoppingCartComponent;
  let fixture: ComponentFixture<ShopShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
