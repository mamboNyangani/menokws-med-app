import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppointmentsPageComponent } from "./pages/appointments-page/appointments-page.component";
import { EmploymentDetailsPageComponent } from "./pages/employment-details-page/employment-details-page.component";
import { PersonalDetailsPageComponent } from "./pages/personal-details-page/personal-details-page.component";
import { PatientsPageComponent } from "./patients-page/patients-page.component";

import { ViewPatientDetailsComponent } from "./view-patient-details/view-patient-details.component";

const routes : Routes = [
    {
        path : '',
        component : PatientsPageComponent
    },
    {
        path :':id',
        component : ViewPatientDetailsComponent
    },
    {
        path :'all/appointments',
        component : AppointmentsPageComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [RouterModule]
})

export class PatientManagementRoutingModule { }