import { TestBed } from '@angular/core/testing';

import { StockCstService } from './stock-cst.service';

describe('StockCstService', () => {
  let service: StockCstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockCstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
