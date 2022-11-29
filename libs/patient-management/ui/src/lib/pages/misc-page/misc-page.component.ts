import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { Misc } from '@menokws/patient-management-data';
import { DialogService } from 'primeng/dynamicdialog';
import { MiscComponent } from '../../create/misc/misc.component';

@Component({
  selector: 'menokws-misc-page',
  templateUrl: './misc-page.component.html',
  styleUrls: ['./misc-page.component.scss'],
})
export class MiscPageComponent implements OnInit {
  @Input() id : number | undefined
  misc! : Misc
  hasData: boolean = false;
  constructor(private service : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.service.getById(`misc/patient`, this.id).subscribe(res => {
      this.hasData = res.misc[0] ? true: false
      this.misc = res.misc[0] ? res.misc[0] : {}
    })
  }

  edit(){
    this.dialogService.open(MiscComponent, {
      header: "Edit Patient Misc",
      width: '70%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true,
      data :{
        isEdit : true,
        misc : this.misc
      }
    })
}
}
