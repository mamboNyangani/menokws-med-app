import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { Patient } from '@menokws/patient-management-data';
import { DialogService } from 'primeng/dynamicdialog';
import { AddPatientComponent } from '../../add-patient/add-patient.component';
import { PersonalDetailsComponent } from '../../create/personal-details/personal-details.component';

@Component({
  selector: 'menokws-personal-details-page',
  templateUrl: './personal-details-page.component.html',
  styleUrls: ['./personal-details-page.component.scss'],
})
export class PersonalDetailsPageComponent implements OnInit {
  @Input() id : number | undefined
  patient! : Patient
  constructor(private service : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getPatient()
  }

  getPatient(){
    this.service.getById(`patient`, this.id).subscribe(res => {
      console.log(res)
      this.patient = res.patient
    })
  }

  editPatient(){
      this.dialogService.open(PersonalDetailsComponent, {
        header: "Edit Patient",
        width: '70%',
        contentStyle: { "overflow": "auto" },
        baseZIndex: 10000,
        maximizable: true,
        data :{
          isEdit : true,
          patient : this.patient
        }
      })
  }

}
