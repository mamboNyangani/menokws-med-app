import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';
import { Guardian, Patient } from '@menokws/patient-management-data';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'menokws-next-of-kin',
  templateUrl: './next-of-kin.component.html',
  styleUrls: ['./next-of-kin.component.scss'],
})
export class NextOfKinComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: RequestService<any>, private config : DynamicDialogConfig) { }
  submitted: boolean = false
  guardian!: Guardian
  form!: FormGroup
  @Output() next = new EventEmitter<any>();
  @Input() patient!: Patient
  @Input() isEdit : boolean = false

  ngOnInit(): void {
      this.guardian =  this.config.data ? this.config.data.guardian : new Guardian()
      this.isEdit = this.config.data ? this.config.data.isEdit : false
    this.form = this.fb.group({
      name: [this.guardian.name, [Validators.required]],
      relationship: [this.guardian.relationship, [Validators.required]],
      email: [this.guardian.email, [Validators.required]],
      sex: [this.guardian.sex, [Validators.required]],
      address: [this.guardian.address, [Validators.required]],
      city: [this.guardian.city, [Validators.required]],
      postal_code: [this.guardian.postal_code, [Validators.required]],
      country: [this.guardian.country, [Validators.required]],
      phone: [this.guardian.phone, [Validators.required]],
      mobile: [this.guardian.mobile, [Validators.required]],
    })
  }

  nextPage() {
    if (!this.form.valid) return
    console.log(this.form.value)
  }

  skip() {
    this.next.emit()
  }
}
