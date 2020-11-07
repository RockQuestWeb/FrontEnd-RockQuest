import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesObjetoComponent } from './condiciones-objeto.component';

describe('CondicionesObjetoComponent', () => {
  let component: CondicionesObjetoComponent;
  let fixture: ComponentFixture<CondicionesObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionesObjetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
