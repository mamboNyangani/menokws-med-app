import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentTypesComponent } from './add-appointment-types.component';

describe('AddAppointmentTypesComponent', () => {
  let component: AddAppointmentTypesComponent;
  let fixture: ComponentFixture<AddAppointmentTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAppointmentTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAppointmentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
