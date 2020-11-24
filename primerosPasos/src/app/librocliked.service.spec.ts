import { TestBed } from '@angular/core/testing';

import { LibroclikedService } from './librocliked.service';

describe('LibroclikedService', () => {
  let service: LibroclikedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroclikedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
