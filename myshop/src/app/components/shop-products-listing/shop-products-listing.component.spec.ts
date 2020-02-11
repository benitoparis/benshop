import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductsListingComponent } from './shop-products-listing.component';

describe('ShopProductsListingComponent', () => {
  let component: ShopProductsListingComponent;
  let fixture: ComponentFixture<ShopProductsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProductsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
