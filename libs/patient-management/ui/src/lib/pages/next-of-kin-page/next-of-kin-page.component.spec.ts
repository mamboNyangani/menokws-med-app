import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextOfKinPageComponent } from './next-of-kin-page.component';

describe('NextOfKinPageComponent', () => {
  let component: NextOfKinPageComponent;
  let fixture: ComponentFixture<NextOfKinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextOfKinPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NextOfKinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
