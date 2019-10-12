import { TestBed } from '@angular/core/testing';

import { GenericServiceService } from './generic-service.service';

describe('GenericServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericServiceService = TestBed.get(GenericServiceService);
    expect(service).toBeTruthy();
  });
});
