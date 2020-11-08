import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImformacionObjetosComponent } from './imformacion-objetos.component';

describe('ImformacionObjetosComponent', () => {
  let component: ImformacionObjetosComponent;
  let fixture: ComponentFixture<ImformacionObjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImformacionObjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImformacionObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
