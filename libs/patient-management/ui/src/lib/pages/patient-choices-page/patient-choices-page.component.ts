import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { Choices } from '@menokws/patient-management-data';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'menokws-patient-choices-page',
  templateUrl: './patient-choices-page.component.html',
  styleUrls: ['./patient-choices-page.component.scss'],
})
export class PatientChoicesPageComponent implements OnInit {
  @Input() id : number | undefined
  choices! : Choices
  constructor(private service : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.service.getById(`choice`, this.id).subscribe(res => {
      console.log(res)
      this.choices = res.g$guardian
    })
  }

  edit(){
    this.dialogService.open(PatientChoicesPageComponent, {
      header: "Edit Patient Choices",
      width: '70%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true,
      data :{
        isEdit : true,
        choices : this.choices
      }
    })
}
}
