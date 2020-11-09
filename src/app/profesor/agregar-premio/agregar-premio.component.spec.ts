import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPremioComponent } from './agregar-premio.component';

describe('AgregarPremioComponent', () => {
  let component: AgregarPremioComponent;
  let fixture: ComponentFixture<AgregarPremioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPremioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
