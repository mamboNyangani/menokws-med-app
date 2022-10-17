import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PatientManagementRoutingModule } from './patient-management-routing.module';
import { UtilsCoreModule } from '@menokws/core';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PersonalDetailsComponent } from './create/personal-details/personal-details.component';
import { EmploymentDetailsComponent } from './create/employment-details/employment-details.component';
import { ContactDetailsComponent } from './create/contact-details/contact-details.component';
import { PatientChoicesComponent } from './create/patient-choices/patient-choices.component';
import { PatientStastiticsComponent } from './create/patient-stastitics/patient-stastitics.component';
import { NextOfKinComponent } from './create/next-of-kin/next-of-kin.component';
import { MiscComponent } from './create/misc/misc.component';
import { ViewPatientDetailsComponent } from './view-patient-details/view-patient-details.component';
import { PersonalDetailsPageComponent } from './pages/personal-details-page/personal-details-page.component';
import { EmploymentDetailsPageComponent } from './pages/employment-details-page/employment-details-page.component';
import { PatientsPageComponent } from './patients-page/patients-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { NextOfKinPageComponent } from './pages/next-of-kin-page/next-of-kin-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { PatientChoicesPageComponent } from './pages/patient-choices-page/patient-choices-page.component';

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
    ViewPatientDetailsComponent,
    PersonalDetailsPageComponent,
    EmploymentDetailsPageComponent,
    ContactDetailsPageComponent,
    NextOfKinPageComponent,
    StatisticsPageComponent,
    PatientChoicesPageComponent,
  ],
  providers: [DatePipe],
})
export class PatientManagementUiModule {}
