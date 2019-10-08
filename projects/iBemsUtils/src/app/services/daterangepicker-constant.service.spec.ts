import { TestBed } from '@angular/core/testing';

import { DaterangepickerConstantService } from './daterangepicker-constant.service';

describe('DaterangepickerConstantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaterangepickerConstantService = TestBed.get(DaterangepickerConstantService);
    expect(service).toBeTruthy();
  });
});
