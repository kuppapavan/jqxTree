import { TestBed } from '@angular/core/testing';

import { UtilmethodsService } from './utilmethods.service';

describe('UtilmethodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilmethodsService = TestBed.get(UtilmethodsService);
    expect(service).toBeTruthy();
  });
});
