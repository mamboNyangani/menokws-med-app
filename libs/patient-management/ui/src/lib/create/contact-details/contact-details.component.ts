import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';
import { ContactDetails, Patient } from '@menokws/patient-management-data';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'menokws-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: RequestService<any>, private config : DynamicDialogConfig) { }
  submitted: boolean = false
  contactDetails!: ContactDetails
  form!: FormGroup
  @Output() next = new EventEmitter<any>();
  @Input() patient!: Patient
  @Input() isEdit : boolean = false

  ngOnInit(): void {
      this.contactDetails =  this.config.data ? this.config.data.contactDetails : new ContactDetails()
      this.isEdit = this.config.data ? this.config.data.isEdit : false
      if(!this.patient){
        this.patient = new Patient()
        this.patient.id = this.config.data.patientId
      }
    this.form = this.fb.group({
      emergency_contact: [this.contactDetails.emergency_contact, [Validators.required]],
      emergency_phone: [this.contactDetails.emergency_phone, [Validators.required]],
      email: [this.contactDetails.email, [Validators.required]],
      father_name: [this.contactDetails.father_name, [Validators.required]],
      mother_name: [this.contactDetails.mother_name, [Validators.required]],
      address_2: [this.contactDetails.address_2, [Validators.required]],
      address: [this.contactDetails.address, [Validators.required]],
      code_id: [this.contactDetails.code_id, [Validators.required]],
    })
  }

  nextPage() {
    if (!this.form.valid) return
    this.service.post(`add-contacts?address=${this.form.value.address}&address_2=${this.form.value.address_2}&mother_name=${this.form.value.mother_name}&father_name=${this.form.value.father_name}&emergency_contact=${this.form.value.emergency_contact}&emergency_phone=${this.form.value.emergency_phone}&email=${this.form.value.email}&patient_id=${this.patient.id}&code_id=1`, {})
      .subscribe(res => {
        this.next.emit()
      })

  }

  skip() {
    this.next.emit()
  }
}
