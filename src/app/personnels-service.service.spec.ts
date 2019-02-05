import { TestBed } from '@angular/core/testing';

import { PersonnelsServiceService } from './personnels-service.service';

describe('PersonnelsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonnelsServiceService = TestBed.get(PersonnelsServiceService);
    expect(service).toBeTruthy();
  });
});
