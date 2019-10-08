import { TestBed, inject } from '@angular/core/testing';

import { ShareCommonObjectsService } from './share-common-objects.service';

describe('ShareCommonObjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareCommonObjectsService]
    });
  });

  it('should be created', inject([ShareCommonObjectsService], (service: ShareCommonObjectsService) => {
    expect(service).toBeTruthy();
  }));
});
