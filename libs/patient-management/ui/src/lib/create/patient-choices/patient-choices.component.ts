import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from '@menokws/patient-management-data';

@Component({
  selector: 'menokws-patient-choices',
  templateUrl: './patient-choices.component.html',
  styleUrls: ['./patient-choices.component.scss'],
})
export class PatientChoicesComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  submitted: boolean = false
  personalInformation: any
  form! :  FormGroup
  @Output() next = new EventEmitter<any>();
  @Input() patient! : Patient

  ngOnInit(): void {
    this.form = this.fb.group({
      middle_name: [null, [Validators.required]],
      date_of_birth: [null, [Validators.required]],
      id_number: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      name: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      marital_status: [null, [Validators.required]],
    })
  }

  nextPage() {
    this.next.emit()
  }
}
