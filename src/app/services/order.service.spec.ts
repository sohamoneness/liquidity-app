import { TestBed } from '@angular/core/testing';

import { OrderProvider } from './order.service';

describe('OrderProvider', () => {
  let service: OrderProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
