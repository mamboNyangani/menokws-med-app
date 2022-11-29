import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
                ]
            },
            {
                label: 'Patient Management',
                items: [
                    { label: 'Patients', icon: 'pi pi-fw pi-id-card', routerLink: ['patient'] },
                    { label: 'Appointments', icon: 'pi pi-fw pi-check-square', routerLink: ['/patient'] },
                ]
            },
        ];
    }
}
