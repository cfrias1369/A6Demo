import { TestBed } from '@angular/core/testing';

import { TemperatureConversionService } from './temperature-conversion.service';

const testSubjectName = 'TemperatureConversionService';
describe(`${testSubjectName}`, () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemperatureConversionService = TestBed.get(TemperatureConversionService);
    expect(service).toBeTruthy();
  });
});
