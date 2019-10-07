import { TestBed } from '@angular/core/testing';

import { GetCityListService } from './get-city-list.service';

describe('GetCityListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCityListService = TestBed.get(GetCityListService);
    expect(service).toBeTruthy();
  });
});
