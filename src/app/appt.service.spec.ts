import { TestBed } from '@angular/core/testing';

import { ApptService } from './appt.service';

describe('ApptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApptService = TestBed.get(ApptService);
    expect(service).toBeTruthy();
  });
});
