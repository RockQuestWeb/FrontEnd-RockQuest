import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarEstudianteComponent } from './filtrar-estudiante.component';

describe('FiltrarEstudianteComponent', () => {
  let component: FiltrarEstudianteComponent;
  let fixture: ComponentFixture<FiltrarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
