import { Component, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';

@Component({
  selector: 'menokws-appointments-page',
  templateUrl: './appointments-page.component.html',
  styleUrls: ['./appointments-page.component.scss'],
})
export class AppointmentsPageComponent implements OnInit {
  appointments: any;
  constructor(private service : RequestService<any>) {}

  ngOnInit(): void {
    this.getAppointments()
  }

  getAppointments(){
    this.service.get('appointment').subscribe((res : any) => {
      this.appointments = res.app$appointments

    })
  }
}
