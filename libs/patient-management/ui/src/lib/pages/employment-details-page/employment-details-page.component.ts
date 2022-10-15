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
  constructor(private service : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getEmployer()
  }

  getEmployer(){
    this.service.getById(`employment`, this.id).subscribe(res => {
      console.log(res)
      this.employer = res.em$employment
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
        employer : this.employer
      }
    })
}
}
