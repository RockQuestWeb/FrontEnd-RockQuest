import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoPuntosComponent } from './manejo-puntos.component';

describe('ManejoPuntosComponent', () => {
  let component: ManejoPuntosComponent;
  let fixture: ComponentFixture<ManejoPuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejoPuntosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
