import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPremiosComponent } from './tabla-premios.component';

describe('TablaPremiosComponent', () => {
  let component: TablaPremiosComponent;
  let fixture: ComponentFixture<TablaPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPremiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
