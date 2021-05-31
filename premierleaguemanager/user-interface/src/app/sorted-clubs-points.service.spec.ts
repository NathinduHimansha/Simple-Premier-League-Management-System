import { TestBed } from '@angular/core/testing';

import { SortedClubsPointsService } from './sorted-clubs-points.service';

describe('SortedClubsPointsService', () => {
  let service: SortedClubsPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortedClubsPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
