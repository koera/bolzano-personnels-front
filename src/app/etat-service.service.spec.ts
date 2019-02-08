import { TestBed } from '@angular/core/testing';

import { EtatServiceService } from './etat-service.service';

describe('EtatServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtatServiceService = TestBed.get(EtatServiceService);
    expect(service).toBeTruthy();
  });
});
