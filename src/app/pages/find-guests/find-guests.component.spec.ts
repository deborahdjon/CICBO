import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGuestsComponent } from './find-guests.component';

describe('FindGuestsComponent', () => {
  let component: FindGuestsComponent;
  let fixture: ComponentFixture<FindGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindGuestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
