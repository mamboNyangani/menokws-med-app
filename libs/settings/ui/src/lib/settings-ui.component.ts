import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menokws-settings-ui',
  templateUrl: './settings-ui.component.html',
  styleUrls: ['./settings-ui.component.scss'],
})
export class SettingsUiComponent implements OnInit {
  constructor() {}

  items: MenuItem[] =[];
  activeItem!: MenuItem ;

  ngOnInit() {
      this.items = [
          {label: 'My Account', icon: 'pi pi-fw pi-home', routerLink: 'my-account'},
          {label: 'Roles', icon: 'pi pi-fw pi-calendar', routerLink: 'roles'},
          {label: 'Country Codes', icon: 'pi pi-fw pi-pencil'},
          {label: 'Appointment Types', icon: 'pi pi-fw pi-file'},
      ];
     // this.activeItem = this.items[0];
  }

}
