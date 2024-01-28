import { TestBed } from '@angular/core/testing';

import { CorreoService } from './correo.service';

describe('CorreoService', () => {
  let service: CorreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
