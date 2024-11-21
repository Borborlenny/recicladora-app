import { TestBed } from '@angular/core/testing';

import { HogarJsonService } from './hogar-json.service';

describe('HogarJsonService', () => {
  let service: HogarJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HogarJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
