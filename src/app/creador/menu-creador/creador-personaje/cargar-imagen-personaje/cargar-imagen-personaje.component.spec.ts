import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarImagenPersonajeComponent } from './cargar-imagen-personaje.component';

describe('CargarImagenPersonajeComponent', () => {
  let component: CargarImagenPersonajeComponent;
  let fixture: ComponentFixture<CargarImagenPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarImagenPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarImagenPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
