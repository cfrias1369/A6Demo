import { TestBed } from '@angular/core/testing';

import { TemperatureConversionService } from './temperature-conversion.service';

describe('TemperatureConversionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemperatureConversionService = TestBed.get(TemperatureConversionService);
    expect(service).toBeTruthy();
  });
});
