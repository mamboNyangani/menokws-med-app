import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';
import { Employer, Patient } from '@menokws/patient-management-data';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'menokws-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.scss'],
})
export class EmploymentDetailsComponent implements OnInit {
  constructor(private fb: FormBuilder, private service : RequestService<any>, private config : DynamicDialogConfig ) { }
  submitted: boolean = false
  personalInformation: any
  form! :  FormGroup
  employer! : Employer
  @Output() save = new EventEmitter<any>();
  @Input() isEdit : boolean = false
  @Input() patient !: Patient

  ngOnInit(): void {
    this.employer =  this.config.data ? this.config.data.employer : new Employer()
    this.isEdit = this.config.data ? this.config.data.isEdit : false
    this.form = this.fb.group({
      occupation: [this.employer?.occupation, [Validators.required]],
      employer: [this.employer?.employer, [Validators.required]],
      employer_address_1: [this.employer?.employer_address_1, [Validators.required]],
      employer_address_2: [this.employer?.employer_address_2, [Validators.required]],
      city: [this.employer?.city, [Validators.required]],
      country: [this.employer?.country, [Validators.required]],
      postal_code: [this.employer?.postal_code, [Validators.required]],
    })
  }

  nextPage() {
    if(!this.form.valid) return
    this.service.post(`add-employment?occupation=${this.form.value.occupation}&employer=${this.form.value.employer}&employer_address_1=${this.form.value.employer_address_1}&employer_address_2=${this.form.value.employer_address_2}&city=${this.form.value.employer_address_2}&country=${this.form.value.country}&postal_code=${this.form.value.postal_code}&patient_id=${this.config.data.patientId}`, {})
    .subscribe(res => {
      this.save.emit(res)
    })
    
  }

}
