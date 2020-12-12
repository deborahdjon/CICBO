import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectEmployeeComponent } from './inspect-employee.component';

describe('InspectEmployeeComponent', () => {
  let component: InspectEmployeeComponent;
  let fixture: ComponentFixture<InspectEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
