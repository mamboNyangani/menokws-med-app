import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppointmentTypesComponent } from "./appointment-types/appointment-types.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { RolesComponent } from "./roles/roles.component";

const routes : Routes = [
    {
        path: '',
        pathMatch : 'full',
        component : RolesComponent
    },
    {
        path: 'roles',
        component: RolesComponent
    },
    {
        path : 'my-account',
        component : MyAccountComponent
    },
    {
        path : 'appointment-types',
        component : AppointmentTypesComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [RouterModule]
})

export class SettingsRoutingModule { }