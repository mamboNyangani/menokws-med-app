import { DatePipe, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';
import { Patient } from '@menokws/patient-management-data';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'menokws-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: RequestService<any>, private datePipe : DatePipe, public config: DynamicDialogConfig) { }
  submitted: boolean = false
  personalInformation: any
  form!: FormGroup
  @Output() next = new EventEmitter<any>();
  @Input() isEdit : boolean = false
  patient! : Patient
  Gender= ["Male", "Female", "Other"];
  maritalStatus = ["Married" , "Single", "Divorced", "Widowed"]

  ngOnInit(): void {
    this.patient
    this.patient =  this.config.data ? this.config.data.patient : new Patient()
    this.isEdit = this.config.data ? this.config.data.isEdit : false
    this.form = this.fb.group({
      middle_name: [this.patient.middle_name, []],
      date_of_birth: [null, []],
      id_number: [this.patient.id_number, [Validators.required]],
      surname: [this.patient.surname, [Validators.required]],
      name: [this.patient.name, [Validators.required]],
      gender: [null, [Validators.required]],
      marital_status: [null, [Validators.required]],
    })
  }

  nextPage() {
    let date = this.datePipe.transform(this.form.value.date_of_birth, 'yyyy/MM/dd');
    if (!this.form.valid) return;
    this.service.post(`add-patient?name=${this.form.value.name}&middle_name=${this.form.value.middle_name}&surname=${this.form.value.surname}&id_number=${this.form.value.id_number}&date_of_birth=${date}&gender=${this.form.value.gender}&marital_status=${this.form.value.marital_status}&created_by=1`, {}).subscribe(res => {
      this.next.emit(res.patient)
    })
  }

  skip() {
    this.next.emit()
  }
}
