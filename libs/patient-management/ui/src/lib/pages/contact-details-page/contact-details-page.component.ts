import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { ContactDetails } from '@menokws/patient-management-data';
import { DialogService } from 'primeng/dynamicdialog';
import { ContactDetailsComponent } from '../../create/contact-details/contact-details.component';

@Component({
  selector: 'menokws-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss'],
})
export class ContactDetailsPageComponent implements OnInit {
  @Input() id : number | undefined
  contactDetails! : ContactDetails
  hasData : boolean =false

  constructor(private service : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getContactDetails()
  }

  getContactDetails(){
    this.service.getById(`contact/patient`, this.id).subscribe(res => {
      this.hasData = res.$employment[0] ? true: false
      this.contactDetails = res.$employment[0]
    })
  }

  edit(){
    this.dialogService.open(ContactDetailsComponent, {
      header: "Edit Contact Details",
      width: '70%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true,
      data :{
        isEdit : true,
        contactDetails : this.contactDetails,
        patientId : this.id
      }
    })
}
}
