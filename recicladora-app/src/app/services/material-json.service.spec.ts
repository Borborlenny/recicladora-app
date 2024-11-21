import { TestBed } from '@angular/core/testing';

import { MaterialJsonService } from './material-json.service';

describe('MaterialJsonService', () => {
  let service: MaterialJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
