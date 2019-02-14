import { TestBed } from '@angular/core/testing';

import { BuffService } from './buff.service';

describe('BuffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuffService = TestBed.get(BuffService);
    expect(service).toBeTruthy();
  });
});
