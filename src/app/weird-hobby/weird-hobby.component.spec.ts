import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeirdHobbyComponent } from './weird-hobby.component';

describe('WeirdHobbyComponent', () => {
  let component: WeirdHobbyComponent;
  let fixture: ComponentFixture<WeirdHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeirdHobbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeirdHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
