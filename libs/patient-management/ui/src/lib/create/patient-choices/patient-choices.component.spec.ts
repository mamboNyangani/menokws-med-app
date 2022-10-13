import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChoicesComponent } from './patient-choices.component';

describe('PatientChoicesComponent', () => {
  let component: PatientChoicesComponent;
  let fixture: ComponentFixture<PatientChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientChoicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
