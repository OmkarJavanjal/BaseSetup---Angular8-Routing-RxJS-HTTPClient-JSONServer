import { TestBed } from '@angular/core/testing';

import { ResponseErrorHandlerService } from './response-error-handler.service';

describe('ResponseErrorHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseErrorHandlerService = TestBed.get(ResponseErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
