import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Patient } from '@menokws/patient-management-data';
import { MenuItem, MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'menokws-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {
  items: MenuItem[] = []
  index: number = 0
  patient!: Patient  ;

  constructor(public messageService: MessageService, private ref : DynamicDialogRef) { }

  ngOnInit(): void {
    this.items = [{
      label: 'Personal Details',
    },
    {
      label: 'Contact Details',
    },
    {
      label: 'Employment Details',
    }
    ];
  }

  next(patient? : any) {
    console.log(patient)
    if(patient) this.patient = patient
    console.log(patient)
    this.index++
    console.log(this.index)
  }

  save(event : any){
    this.messageService.add({severity:'success', summary:`${event.message}`, detail:'Patient has been added successfully!'});
    this.ref.close()
  }
}
