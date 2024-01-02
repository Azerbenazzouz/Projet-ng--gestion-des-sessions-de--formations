import { TestBed } from '@angular/core/testing';

import { FormationFService } from './formation-f.service';

describe('FormationFService', () => {
  let service: FormationFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
