import { TestBed } from '@angular/core/testing';

import { ShoppingService } from './shoppingservice.service';

describe('ShoppingserviceService', () => {
  let service: ShoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
