import { TestBed } from '@angular/core/testing';

import { MacDefinationService } from './mac-defination.service';

describe('MacDefinationService', () => {
  let service: MacDefinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacDefinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
