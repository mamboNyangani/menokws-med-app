import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { Employer } from '@menokws/patient-management-data';

@Component({
  selector: 'menokws-employment-details-page',
  templateUrl: './employment-details-page.component.html',
  styleUrls: ['./employment-details-page.component.scss'],
})
export class EmploymentDetailsPageComponent implements OnInit {
  @Input() id : number | undefined
  employer! : Employer
  constructor(private service : RequestService<any>) {}

  ngOnInit(): void {
    this.getEmployer()
  }

  getEmployer(){
    this.service.getById(`employment`, this.id).subscribe(res => {
      console.log(res)
      this.employer = res.em$employment
    })
  }
}
