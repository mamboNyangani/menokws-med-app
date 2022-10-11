import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PatientsPageComponent } from './patients-page/patients-page.component';
import { PatientManagementRoutingModule } from './patient-management-routing.module';
import { UtilsCoreModule } from '@menokws/core';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PatientChoicesComponent } from './patient-choices/patient-choices.component';
import { PatientStastiticsComponent } from './patient-stastitics/patient-stastitics.component';
import { NextOfKinComponent } from './next-of-kin/next-of-kin.component';
import { MiscComponent } from './misc/misc.component';

export const patientManagementUiRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PatientManagementRoutingModule,
    UtilsCoreModule,
  ],
  declarations: [
    PatientsPageComponent,
    AddPatientComponent,
    PersonalDetailsComponent,
    EmploymentDetailsComponent,
    ContactDetailsComponent,
    PatientChoicesComponent,
    PatientStastiticsComponent,
    NextOfKinComponent,
    MiscComponent,
  ],
  providers:[
    DatePipe
  ]
})
export class PatientManagementUiModule {}
