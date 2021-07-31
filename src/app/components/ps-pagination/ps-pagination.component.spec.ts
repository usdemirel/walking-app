import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsPaginationComponent } from './ps-pagination.component';

describe('PsPaginationComponent', () => {
  let component: PsPaginationComponent;
  let fixture: ComponentFixture<PsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
