import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { UtilsCoreModule } from '@menokws/core';

@NgModule({
  imports: [CommonModule, RouterModule, DashboardsRoutingModule, UtilsCoreModule],
  declarations: [DashboardsComponent],
})
export class DashboardsModule {}
