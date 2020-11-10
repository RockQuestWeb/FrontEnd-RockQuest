import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMisionesComponent } from './tabla-misiones.component';

describe('TablaMisionesComponent', () => {
  let component: TablaMisionesComponent;
  let fixture: ComponentFixture<TablaMisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMisionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
