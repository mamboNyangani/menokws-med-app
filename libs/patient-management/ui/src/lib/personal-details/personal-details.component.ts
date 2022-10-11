import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';

@Component({
  selector: 'menokws-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: RequestService<any>, private datePipe : DatePipe) { }
  submitted: boolean = false
  personalInformation: any
  form!: FormGroup
  @Output() next = new EventEmitter<any>();
  Gender= ["Male", "Female", "Other"];
  maritalStatus = ["Married" , "Single", "Divorced", "Widowed"]

  ngOnInit(): void {
    this.form = this.fb.group({
      middle_name: [null, []],
      date_of_birth: [null, []],
      id_number: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      name: [null, [Validators.required]],
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
