import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menokws-view-patient-details',
  templateUrl: './view-patient-details.component.html',
  styleUrls: ['./view-patient-details.component.scss'],
})
export class ViewPatientDetailsComponent implements OnInit {
  constructor(private route : ActivatedRoute) {
    this.route.snapshot.params
    console.log(this.route.snapshot.params['id'])
  }

  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home'},
          {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
          {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
          {label: 'Documentation', icon: 'pi pi-fw pi-file'},
          {label: 'Settings', icon: 'pi pi-fw pi-cog'}
      ];
  }
}
