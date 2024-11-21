import { TestBed } from '@angular/core/testing';

import { RutaJsonService } from './ruta-json.service';

describe('RutaJsonService', () => {
  let service: RutaJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutaJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
