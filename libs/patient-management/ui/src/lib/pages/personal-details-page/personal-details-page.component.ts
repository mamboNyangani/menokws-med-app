import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { Patient } from '@menokws/patient-management-data';

@Component({
  selector: 'menokws-personal-details-page',
  templateUrl: './personal-details-page.component.html',
  styleUrls: ['./personal-details-page.component.scss'],
})
export class PersonalDetailsPageComponent implements OnInit {
  @Input() id : number | undefined
  patient! : Patient
  constructor(private service : RequestService<any>) {}

  ngOnInit(): void {
    this.getPatient()
  }

  getPatient(){
    this.service.getById(`patient`, this.id).subscribe(res => {
      console.log(res)
      this.patient = res.patient
    })
  }

}