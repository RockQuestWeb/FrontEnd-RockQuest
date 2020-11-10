import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCreadorComponent } from './menu-creador.component';

describe('MenuCreadorComponent', () => {
  let component: MenuCreadorComponent;
  let fixture: ComponentFixture<MenuCreadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCreadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCreadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
