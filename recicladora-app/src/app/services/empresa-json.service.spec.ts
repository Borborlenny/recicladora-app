import { TestBed } from '@angular/core/testing';

import { EmpresaJsonService } from './empresa-json.service';

describe('EmpresaJsonService', () => {
  let service: EmpresaJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
