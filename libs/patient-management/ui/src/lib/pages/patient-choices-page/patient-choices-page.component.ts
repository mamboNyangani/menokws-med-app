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
  hasData: boolean = false;
  constructor(private service : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.service.getById(`choice/patient`, this.id).subscribe(res => {
      this.hasData = res.choice[0] ? true: false
      this.choices = res.choice[0] ? res.choice[0] : {}
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
