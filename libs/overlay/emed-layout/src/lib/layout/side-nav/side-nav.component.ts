import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'mambos-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    items: MenuItem[] = [];

    constructor() { }

    ngOnInit() {
        this.items = [
            {
                label: 'Patient Management',
                icon: 'pi pi-pw pi-file',
                items: [{
                    label: 'Patients',
                    icon: 'pi pi-fw pi-plus',
                    routerLink: 'patient',
                },
                {
                    label : "Appointments",
                    icon : 'pi pi-fw pi-plus',
                    routerLink : 'appointments'
                }
                ]
            }
        ];
    }
}
