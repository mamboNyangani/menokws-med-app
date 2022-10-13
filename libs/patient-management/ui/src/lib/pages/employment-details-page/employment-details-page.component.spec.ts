import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentDetailsPageComponent } from './employment-details-page.component';

describe('EmploymentDetailsPageComponent', () => {
  let component: EmploymentDetailsPageComponent;
  let fixture: ComponentFixture<EmploymentDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmploymentDetailsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmploymentDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
