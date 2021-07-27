import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsFiltersComponent } from './ps-filters.component';

describe('PsFiltersComponent', () => {
  let component: PsFiltersComponent;
  let fixture: ComponentFixture<PsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
