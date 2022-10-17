import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChoicesPageComponent } from './patient-choices-page.component';

describe('PatientChoicesPageComponent', () => {
  let component: PatientChoicesPageComponent;
  let fixture: ComponentFixture<PatientChoicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientChoicesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientChoicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
