import { TestBed } from '@angular/core/testing';

import { CarritoServicesService } from './carrito-services.service';

describe('CarritoServicesService', () => {
  let service: CarritoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
