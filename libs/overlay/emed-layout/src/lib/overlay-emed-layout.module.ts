import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { OverlayEmedRoutingModule } from './overlay-emed-routing.module';
import { UtilsCoreModule } from '@menokws/core';
import { AuthUiModule } from '@menokws/auth-ui';
import { SakaiModule } from '@menokws/sakai';

export const overlayEmedLayoutRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UtilsCoreModule,
    AuthUiModule,
    OverlayEmedRoutingModule,
    SakaiModule
  ],
  declarations: [
    LayoutComponent,
    SideNavComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class OverlayEmedLayoutModule { }
