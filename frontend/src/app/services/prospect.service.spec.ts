import { TestBed } from '@angular/core/testing';

import { ProspectService } from './prospect.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const testSubjectName = 'ProspectService';
describe(`${testSubjectName}`, () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
  }));

  it('should be created', () => {
    const service: ProspectService = TestBed.get(ProspectService);
    expect(service).toBeTruthy();
  });
});
