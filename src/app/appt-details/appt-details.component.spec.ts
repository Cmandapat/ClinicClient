import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptDetailsComponent } from './appt-details.component';

describe('ApptDetailsComponent', () => {
  let component: ApptDetailsComponent;
  let fixture: ComponentFixture<ApptDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
