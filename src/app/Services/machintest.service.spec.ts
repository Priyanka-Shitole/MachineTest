import { TestBed } from '@angular/core/testing';

import { MachintestService } from './machintest.service';

describe('MachintestService', () => {
  let service: MachintestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachintestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
