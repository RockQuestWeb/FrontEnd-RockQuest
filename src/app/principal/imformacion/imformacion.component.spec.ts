import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImformacionComponent } from './imformacion.component';

describe('ImformacionComponent', () => {
  let component: ImformacionComponent;
  let fixture: ComponentFixture<ImformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
