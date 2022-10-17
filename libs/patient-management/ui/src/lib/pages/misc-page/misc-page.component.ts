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
  constructor(private service : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.service.getById(`choice`, this.id).subscribe(res => {
      console.log(res)
      this.misc = res.g$guardian
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
