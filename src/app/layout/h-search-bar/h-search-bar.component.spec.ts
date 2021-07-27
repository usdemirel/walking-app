import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSearchBarComponent } from './h-search-bar.component';

describe('HSearchBarComponent', () => {
  let component: HSearchBarComponent;
  let fixture: ComponentFixture<HSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
