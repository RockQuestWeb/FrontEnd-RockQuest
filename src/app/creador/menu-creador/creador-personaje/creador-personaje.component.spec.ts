import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorPersonajeComponent } from './creador-personaje.component';

describe('CreadorPersonajeComponent', () => {
  let component: CreadorPersonajeComponent;
  let fixture: ComponentFixture<CreadorPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreadorPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
