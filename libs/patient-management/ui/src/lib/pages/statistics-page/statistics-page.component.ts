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
  constructor(private service : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.service.getById(`statistic`, this.id).subscribe(res => {
      console.log(res)
      this.statistic = res.g$guardian
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
