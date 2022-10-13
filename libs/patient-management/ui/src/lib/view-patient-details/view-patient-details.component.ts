import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menokws-view-patient-details',
  templateUrl: './view-patient-details.component.html',
  styleUrls: ['./view-patient-details.component.scss'],
})
export class ViewPatientDetailsComponent implements OnInit {
  id: number

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
  }

  items!: MenuItem[];

  ngOnInit() {}
}
