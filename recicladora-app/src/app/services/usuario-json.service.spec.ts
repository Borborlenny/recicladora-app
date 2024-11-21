import { TestBed } from '@angular/core/testing';

import { UsuarioJsonService } from './usuario-json.service';

describe('UsuarioJsonService', () => {
  let service: UsuarioJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
