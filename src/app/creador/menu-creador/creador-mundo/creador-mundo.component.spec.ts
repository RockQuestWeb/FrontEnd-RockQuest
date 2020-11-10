import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorMundoComponent } from './creador-mundo.component';

describe('CreadorMundoComponent', () => {
  let component: CreadorMundoComponent;
  let fixture: ComponentFixture<CreadorMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreadorMundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
