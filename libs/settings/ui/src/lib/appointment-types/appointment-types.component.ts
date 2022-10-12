import { Component, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AddAppointmentTypesComponent } from './add-appointment-types/add-appointment-types.component';

@Component({
  selector: 'menokws-appointment-types',
  templateUrl: './appointment-types.component.html',
  styleUrls: ['./appointment-types.component.scss'],
})
export class AppointmentTypesComponent implements OnInit {
  appointmentTypes: any;
  constructor(private requestService : RequestService<any>, private dialogService : DialogService, private message: MessageService) {}

  ngOnInit(): void {
    this.getAppointmentTypes()
  }

  getAppointmentTypes(){
    this.requestService.get(`appointment-type`).subscribe(res => {
      console.log(res)
      this.appointmentTypes = res.appointmenttypes
    })
  }

  deleteAppointmentType(type : any){
    console.log(type)
    this.requestService.delete(`appointment-types/`, type.id).subscribe(res => {
      console.log(res)
      this.message.add({severity:'success', summary:`${res.message}`})
      this.getAppointmentTypes()
    })
  }

  addAppointmentType(){
    this.dialogService.open(AddAppointmentTypesComponent, {
      header: "Add Appointment Type",
      width: '40%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true
    })
  }
}
