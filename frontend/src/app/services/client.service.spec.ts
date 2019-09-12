import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const testSubjectName = 'ClientService';
describe(`${testSubjectName}`, () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
  }));

  it('should be created', () => {
    const service: ClientService = TestBed.get(ClientService);
    expect(service).toBeTruthy();
  });
});
