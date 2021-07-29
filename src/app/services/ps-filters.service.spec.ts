import { TestBed } from '@angular/core/testing';

import { PSFiltersService } from './ps-filters.service';

describe('PSFiltersService', () => {
  let service: PSFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PSFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
