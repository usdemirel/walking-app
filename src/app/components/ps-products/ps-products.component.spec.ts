import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsProductsComponent } from './ps-products.component';

describe('PsProductsComponent', () => {
  let component: PsProductsComponent;
  let fixture: ComponentFixture<PsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
