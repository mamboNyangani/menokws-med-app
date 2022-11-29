import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { Guardian } from '@menokws/patient-management-data';
import { DialogService } from 'primeng/dynamicdialog';
import { NextOfKinComponent } from '../../create/next-of-kin/next-of-kin.component';


@Component({
  selector: 'menokws-next-of-kin-page',
  templateUrl: './next-of-kin-page.component.html',
  styleUrls: ['./next-of-kin-page.component.scss'],
})
export class NextOfKinPageComponent implements OnInit {
  @Input() id : number | undefined
  guardian! : Guardian
  constructor(private service : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.service.getById(`guardian/patient`, this.id).subscribe(res => {
      this.guardian = res.$guardian[0]
    })
  }

  edit(){
    this.dialogService.open(NextOfKinComponent, {
      header: "Edit Guardian Details",
      width: '70%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true,
      data :{
        isEdit : true,
        guardian : this.guardian
      }
    })
}
}
