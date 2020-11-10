import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPrincipalesComponent } from './cards-principales.component';

describe('CardsPrincipalesComponent', () => {
  let component: CardsPrincipalesComponent;
  let fixture: ComponentFixture<CardsPrincipalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPrincipalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
