import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImformacionPersonajeComponent } from './imformacion-personaje.component';

describe('ImformacionPersonajeComponent', () => {
  let component: ImformacionPersonajeComponent;
  let fixture: ComponentFixture<ImformacionPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImformacionPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImformacionPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
