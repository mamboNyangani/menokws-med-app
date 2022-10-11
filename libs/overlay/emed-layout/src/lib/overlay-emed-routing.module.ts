import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";



const routes: Route[] = [
    { path: 'auth', loadChildren: () => import('@menokws/auth-ui').then(c => c.AuthUiModule) },
    {
        path: '', component: LayoutComponent,
       // canActivate: [AuthGuard],
        children:
            [
                {
                    path: 'dashboard',
                    loadChildren: () => import('@menokws/patient-management').then(m => m.PatientManagementUiModule)
                },
                {
                    path : 'patient',
                    loadChildren: () => import('@menokws/patient-management').then(m => m.PatientManagementUiModule)
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