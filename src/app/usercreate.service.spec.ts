import { TestBed } from '@angular/core/testing';

import { UserCreateService } from './usercreate.service';

describe('DoctorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCreateService = TestBed.get(UserCreateService);
    expect(service).toBeTruthy();
  });
});