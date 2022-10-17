import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';
import { Choices, Patient } from '@menokws/patient-management-data';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'menokws-patient-choices',
  templateUrl: './patient-choices.component.html',
  styleUrls: ['./patient-choices.component.scss'],
})
export class PatientChoicesComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: RequestService<any>, private config : DynamicDialogConfig) { }
  submitted: boolean = false
  choices!: Choices
  form!: FormGroup
  @Output() next = new EventEmitter<any>();
  @Input() patient!: Patient
  @Input() isEdit : boolean = false

  ngOnInit(): void {
      this.choices =  this.config.data ? this.config.data.choices : new Choices()
      this.isEdit = this.config.data ? this.config.data.isEdit : false
    this.form = this.fb.group({
      allow_email: [this.choices.allow_email, [Validators.required]],
      allow_sms: [this.choices.allow_sms, [Validators.required]],
      leave_message_with: [this.choices.leave_message_with, [Validators.required]],
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
