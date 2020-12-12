import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectGuestComponent } from './inspect-guest.component';

describe('InspectGuestComponent', () => {
  let component: InspectGuestComponent;
  let fixture: ComponentFixture<InspectGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
