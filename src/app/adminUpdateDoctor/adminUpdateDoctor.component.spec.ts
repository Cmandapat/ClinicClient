import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateDoctorComponent } from './adminUpdateDoctor.component';

describe('AdminUpdateDoctorComponent', () => {
  let component: AdminUpdateDoctorComponent;
  let fixture: ComponentFixture<AdminUpdateDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdateDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
