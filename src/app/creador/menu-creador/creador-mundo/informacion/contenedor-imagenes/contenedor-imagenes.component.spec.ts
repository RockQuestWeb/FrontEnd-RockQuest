import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorImagenesComponent } from './contenedor-imagenes.component';

describe('ContenedorImagenesComponent', () => {
  let component: ContenedorImagenesComponent;
  let fixture: ComponentFixture<ContenedorImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
