import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { AppointmentTypesComponent } from './appointment-types/appointment-types.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { UtilsCoreModule } from '@menokws/core';
import { SettingsUiComponent } from './settings-ui.component';
import { AddRolesComponent } from './roles/add-roles/add-roles.component';
import { AddAppointmentTypesComponent } from './appointment-types/add-appointment-types/add-appointment-types.component';

@NgModule({
  imports: [CommonModule, SettingsRoutingModule, UtilsCoreModule],

  declarations: [
    RolesComponent,
    AppointmentTypesComponent,
    MyAccountComponent,
    SettingsUiComponent,
    AddRolesComponent,
    AddAppointmentTypesComponent,
  ],
})
export class SettingsUiModule {}
