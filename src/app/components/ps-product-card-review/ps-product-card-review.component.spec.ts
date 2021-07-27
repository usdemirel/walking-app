import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsProductCardReviewComponent } from './ps-product-card-review.component';

describe('PsProductCardReviewComponent', () => {
  let component: PsProductCardReviewComponent;
  let fixture: ComponentFixture<PsProductCardReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsProductCardReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsProductCardReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
