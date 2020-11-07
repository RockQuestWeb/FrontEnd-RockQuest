import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorObjetosComponent } from './creador-objetos.component';

describe('CreadorObjetosComponent', () => {
  let component: CreadorObjetosComponent;
  let fixture: ComponentFixture<CreadorObjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreadorObjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
