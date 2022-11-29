import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { Stastitics } from '@menokws/patient-management-data';
import { DialogService } from 'primeng/dynamicdialog';
import { PatientStastiticsComponent } from '../../create/patient-stastitics/patient-stastitics.component';

@Component({
  selector: 'menokws-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss'],
})
export class StatisticsPageComponent implements OnInit {
  @Input() id : number | undefined
  statistic! : Stastitics
  hasData: boolean = false;
  constructor(private service : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.service.getById(`statistic/patient`, this.id).subscribe(res => {
      this.hasData = res.statistic[0] ? true: false
      this.statistic = res.statistic[0] ? res.statistic[0] : {}
    })
  }

  edit(){
    this.dialogService.open(PatientStastiticsComponent, {
      header: "Edit Statistical Info",
      width: '70%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true,
      data :{
        isEdit : true,
        statistic : this.statistic
      }
    })
}
}
