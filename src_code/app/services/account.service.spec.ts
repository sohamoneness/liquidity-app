import { TestBed } from '@angular/core/testing';

import { AccountProvider } from './account.service';

describe('AccountProvider', () => {
  let service: AccountProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
