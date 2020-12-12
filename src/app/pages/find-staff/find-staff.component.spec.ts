import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStaffComponent } from './find-staff.component';

describe('FindStaffComponent', () => {
  let component: FindStaffComponent;
  let fixture: ComponentFixture<FindStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
