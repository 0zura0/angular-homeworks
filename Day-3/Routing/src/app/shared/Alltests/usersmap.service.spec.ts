import { TestBed } from '@angular/core/testing';

import { UsersmapService } from '../Services/usersmap.service';

describe('UsersmapService', () => {
  let service: UsersmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
