import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';
import { Patient } from '@menokws/patient-management-data';

@Component({
  selector: 'menokws-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(private fb: FormBuilder, private service : RequestService<any>) { }
  submitted: boolean = false
  personalInformation: any
  form! :  FormGroup
  @Output() next = new EventEmitter<any>();
  @Input() patient! : Patient

  ngOnInit(): void {
    this.form = this.fb.group({
      emergency_contact: [null, [Validators.required]],
      emergency_phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      father_name: [null, [Validators.required]],
      mother_name: [null, [Validators.required]],
      address_2: [null, [Validators.required]],
      address: [null, [Validators.required]],
      code_id: [null, [Validators.required]],
    })
  }

  nextPage() {
    if(!this.form.valid) return
    this.service.post(`add-contacts?address=${this.form.value.address}&address_2=${this.form.value.address_2}&mother_name=${this.form.value.mother_name}&father_name=${this.form.value.father_name}&emergency_contact=${this.form.value.emergency_contact}&emergency_phone=${this.form.value.emergency_phone}&email=${this.form.value.email}&patient_id=${this.patient.id}&code_id=1`, {})
    .subscribe(res => {
      this.next.emit()
    })
    
  }

  skip(){
    this.next.emit()
  }
}
