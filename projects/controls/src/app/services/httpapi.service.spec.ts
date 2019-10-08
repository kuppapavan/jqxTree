import { TestBed } from '@angular/core/testing';

import { HttpapiService } from './httpapi.service';

describe('HttpapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpapiService = TestBed.get(HttpapiService);
    expect(service).toBeTruthy();
  });
});
