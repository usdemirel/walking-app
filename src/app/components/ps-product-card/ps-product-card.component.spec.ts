import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsProductCardComponent } from './ps-product-card.component';

describe('PsProductCardComponent', () => {
  let component: PsProductCardComponent;
  let fixture: ComponentFixture<PsProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
