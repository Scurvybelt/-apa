import { TestBed } from '@angular/core/testing';

import { CrearCuentaService } from './crear-cuenta.service';

describe('CrearCuentaService', () => {
  let service: CrearCuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearCuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
