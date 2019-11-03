import { TestBed } from '@angular/core/testing';

import { DynamicContentResolverServiceService } from './dynamic-content-resolver-service.service';

describe('DynamicContentResolverServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicContentResolverServiceService = TestBed.get(DynamicContentResolverServiceService);
    expect(service).toBeTruthy();
  });
});
