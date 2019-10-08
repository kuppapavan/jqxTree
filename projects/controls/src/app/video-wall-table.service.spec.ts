import { TestBed } from '@angular/core/testing';

import { VideoWallTableService } from './video-wall-table.service';

describe('VideoWallTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoWallTableService = TestBed.get(VideoWallTableService);
    expect(service).toBeTruthy();
  });
});
