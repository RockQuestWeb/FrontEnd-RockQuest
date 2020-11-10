import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImformacionMisionComponent } from './imformacion-mision.component';

describe('ImformacionMisionComponent', () => {
  let component: ImformacionMisionComponent;
  let fixture: ComponentFixture<ImformacionMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImformacionMisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImformacionMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
