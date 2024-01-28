import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrasGrandesComponent } from './letras-grandes.component';

describe('LetrasGrandesComponent', () => {
  let component: LetrasGrandesComponent;
  let fixture: ComponentFixture<LetrasGrandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetrasGrandesComponent]
    });
    fixture = TestBed.createComponent(LetrasGrandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
