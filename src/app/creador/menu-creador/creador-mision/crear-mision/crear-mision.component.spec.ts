import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMisionComponent } from './crear-mision.component';

describe('CrearMisionComponent', () => {
  let component: CrearMisionComponent;
  let fixture: ComponentFixture<CrearMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
