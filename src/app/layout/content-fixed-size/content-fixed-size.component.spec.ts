import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFixedSizeComponent } from './content-fixed-size.component';

describe('ContentFixedSizeComponent', () => {
  let component: ContentFixedSizeComponent;
  let fixture: ComponentFixture<ContentFixedSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFixedSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFixedSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
