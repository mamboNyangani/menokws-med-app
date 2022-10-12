import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [RouterModule]
})

export class PatientManagementRoutingModule { }