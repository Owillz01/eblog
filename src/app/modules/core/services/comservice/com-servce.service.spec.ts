import { TestBed } from '@angular/core/testing';

import { ComServceService } from './com-servce.service';

describe('ComServceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComServceService = TestBed.get(ComServceService);
    expect(service).toBeTruthy();
  });
});
