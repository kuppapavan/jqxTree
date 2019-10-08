import { TestBed } from '@angular/core/testing';

import { DaterangepickerConfigService } from './daterangepicker-config.service';

describe('DaterangepickerConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaterangepickerConfigService = TestBed.get(DaterangepickerConfigService);
    expect(service).toBeTruthy();
  });
});
