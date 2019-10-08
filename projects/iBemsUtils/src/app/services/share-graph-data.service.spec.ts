import { TestBed } from '@angular/core/testing';

import { ShareGraphDataService } from './share-graph-data.service';

describe('ShareGraphDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareGraphDataService = TestBed.get(ShareGraphDataService);
    expect(service).toBeTruthy();
  });
});
