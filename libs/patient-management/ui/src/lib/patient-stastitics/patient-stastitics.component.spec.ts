import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientStastiticsComponent } from './patient-stastitics.component';

describe('PatientStastiticsComponent', () => {
  let component: PatientStastiticsComponent;
  let fixture: ComponentFixture<PatientStastiticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientStastiticsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientStastiticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
