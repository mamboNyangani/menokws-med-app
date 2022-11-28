import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '@menokws/core';
import { Patient } from '@menokws/patient-management-data';
import { MessageService } from 'primeng/api';
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

  constructor(private service: RequestService<any>, public dialogService: DialogService, private router : Router, private messageService: MessageService) { }

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
    this.service.delete('patient', patient.id).subscribe(res => {
      this.messageService.add({
        severity: 'success',
        summary: `Done`,
        detail: `Patient Removed`,
      });
    })
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

  onConfirm(){
    this.router.navigateByUrl(`/${1}`)
  }

  onReject(){
    //close notification
  }
}
