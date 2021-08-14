import { TestBed } from '@angular/core/testing';

import { AdCategoriesService } from './ad-categories.service';

describe('AdCategoriesService', () => {
  let service: AdCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
