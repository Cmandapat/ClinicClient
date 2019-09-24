import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetDoctorSpecComponent } from './admin-get-doctor-spec.component';

describe('AdminGetDoctorSpecComponent', () => {
  let component: AdminGetDoctorSpecComponent;
  let fixture: ComponentFixture<AdminGetDoctorSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGetDoctorSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetDoctorSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
