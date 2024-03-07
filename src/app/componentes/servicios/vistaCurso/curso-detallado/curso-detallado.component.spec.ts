import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalladoComponent } from './curso-detallado.component';

describe('CursoDetalladoComponent', () => {
  let component: CursoDetalladoComponent;
  let fixture: ComponentFixture<CursoDetalladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoDetalladoComponent]
    });
    fixture = TestBed.createComponent(CursoDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
