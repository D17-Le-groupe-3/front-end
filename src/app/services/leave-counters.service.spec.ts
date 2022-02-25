import { TestBed } from '@angular/core/testing';

import { LeaveCountersService } from './leave-counters.service';

describe('LeaveCountersService', () => {
  let service: LeaveCountersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveCountersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
