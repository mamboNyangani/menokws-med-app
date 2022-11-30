import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardsUiRoutingModule } from './dashboards-ui-routing.module';
import { UtilsCoreModule } from '@menokws/core';
import { RouterModule } from '@angular/router';
import { SakaiModule } from '@menokws/sakai';

@NgModule({
  imports: [CommonModule,
    DashboardsUiRoutingModule, 
    UtilsCoreModule],
  declarations: [DashboardsComponent]
})
export class DashboardsUiModule {}
