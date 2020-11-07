import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorMisionComponent } from './creador-mision.component';

describe('CreadorMisionComponent', () => {
  let component: CreadorMisionComponent;
  let fixture: ComponentFixture<CreadorMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreadorMisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
