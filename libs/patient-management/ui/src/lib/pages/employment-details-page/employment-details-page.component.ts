import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { Employer } from '@menokws/patient-management-data';
import { DialogService } from 'primeng/dynamicdialog';
import { EmploymentDetailsComponent } from '../../create/employment-details/employment-details.component';

@Component({
  selector: 'menokws-employment-details-page',
  templateUrl: './employment-details-page.component.html',
  styleUrls: ['./employment-details-page.component.scss'],
})
export class EmploymentDetailsPageComponent implements OnInit {
  @Input() id : number | undefined
  employer! : Employer
  hasData : boolean = false

  constructor(private service : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getEmployer()
  }

  getEmployer(){
    this.service.getById(`employment/patient`, this.id).subscribe(res => {
      this.hasData = res.$employment[0] ? true: false
      this.employer = res.$employment[0] ? res.$employment[0] : {}
    })
  }

  edit(){
    this.dialogService.open(EmploymentDetailsComponent, {
      header: "Edit Employment Details",
      width: '70%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true,
      data :{
        isEdit : true,
        employer : this.employer,
        patientId : this.id
      }
    })
}
}
