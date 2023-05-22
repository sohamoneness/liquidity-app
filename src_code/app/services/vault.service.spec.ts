import { TestBed } from '@angular/core/testing';

import { VaultProvider } from './vault.service';

describe('VaultProvider', () => {
  let service: VaultProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaultProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
