import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { AppointmentTypesComponent } from './appointment-types/appointment-types.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    SettingsRoutingModule
  ],
  
  declarations: [
    RolesComponent, 
    AppointmentTypesComponent, 
    MyAccountComponent
  ],
})
export class SettingsUiModule { }
