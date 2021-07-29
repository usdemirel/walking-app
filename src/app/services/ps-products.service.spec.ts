import { TestBed } from '@angular/core/testing';

import { PSProductsService } from './ps-products.service';

describe('PSProductsService', () => {
  let service: PSProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PSProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
