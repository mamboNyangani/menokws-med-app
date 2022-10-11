import { Component, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { Patient } from '@menokws/patient-management-data';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddPatientComponent } from '../add-patient/add-patient.component';

@Component({
  selector: 'menokws-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.scss']
})
export class PatientsPageComponent implements OnInit {
  patients: Patient[] = [];
  selectedPatients: Patient[] = [];
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  constructor(private service: RequestService<any>, public dialogService: DialogService) { }

  ngOnInit() {
    this.getPatients()
  }

  getPatients() {
    this.service.get('patient').subscribe(res => {
      this.patients = res.patients
      this.loading = false
    })
  }

  deletePatient(patient: Patient) {
    console.log(patient)
  }

  editPatient(patient: Patient) {
  }

  addPatient() {
    this.dialogService.open(AddPatientComponent, {
      header: "Add Patient",
      width: '70%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true
    })

  }
}