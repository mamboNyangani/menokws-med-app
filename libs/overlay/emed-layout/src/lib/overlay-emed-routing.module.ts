import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from "@menokws/core";
import { AppLayoutComponent } from "@menokws/sakai";
import { LayoutComponent } from "./layout/layout.component";



const routes: Route[] = [
    { path: 'auth', loadChildren: () => import('@menokws/auth-ui').then(c => c.AuthUiModule) },
    {
        path: '', component: AppLayoutComponent,
        canActivate: [AuthGuard],
        children:
            [
                {
                    path: 'dashboard',
                    loadChildren: () => import('@menokws/patient-management').then(m => m.PatientManagementUiModule)
                },
                {
                    path : 'patient',
                    loadChildren: () => import('@menokws/patient-management').then(m => m.PatientManagementUiModule)
                },
                {
                    path : 'settings',
                    loadChildren: () => import('@menokws/settings-ui').then(m =>m.SettingsUiModule)
                }
            ]
    }

];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})

export class OverlayEmedRoutingModule { }