import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';
import { Patient } from '@menokws/patient-management-data';

@Component({
  selector: 'menokws-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.scss'],
})
export class EmploymentDetailsComponent implements OnInit {
  constructor(private fb: FormBuilder, private service : RequestService<any>) { }
  submitted: boolean = false
  personalInformation: any
  form! :  FormGroup
  @Output() save = new EventEmitter<any>();
  @Input() patient! : Patient

  ngOnInit(): void {
    console.log("patient", this.patient)
    this.form = this.fb.group({
      occupation: [null, [Validators.required]],
      employer: [null, [Validators.required]],
      employer_address_1: [null, [Validators.required]],
      employer_address_2: [null, [Validators.required]],
      city: [null, [Validators.required]],
      country: [null, [Validators.required]],
      postal_code: [null, [Validators.required]],
    })
  }

  nextPage() {
    if(!this.form.valid) return
    this.service.post(`add-employment?occupation=${this.form.value.occupation}&employer=${this.form.value.employer}&employer_address_1=${this.form.value.employer_address_1}&employer_address_2=${this.form.value.employer_address_2}&city=${this.form.value.employer_address_2}&country=${this.form.value.country}&postal_code=${this.form.value.postal_code}&patient_id=${this.patient.id}`, {})
    .subscribe(res => {
      this.save.emit(res)
    })
    
  }

}
