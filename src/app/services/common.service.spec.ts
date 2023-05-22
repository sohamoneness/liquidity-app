import { TestBed } from '@angular/core/testing';

import { CommonProvider } from './common.service';

describe('CommonProvider', () => {
  let service: CommonProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
