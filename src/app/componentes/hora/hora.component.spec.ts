import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraComponent } from './hora.component';

describe('HoraComponent', () => {
  let component: HoraComponent;
  let fixture: ComponentFixture<HoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoraComponent]
    });
    fixture = TestBed.createComponent(HoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
