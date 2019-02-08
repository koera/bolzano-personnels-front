import { TestBed } from '@angular/core/testing';

import { PresenceServiceService } from './presence-service.service';

describe('PresenceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresenceServiceService = TestBed.get(PresenceServiceService);
    expect(service).toBeTruthy();
  });
});
