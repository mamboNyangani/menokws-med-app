import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';
import { Patient, Stastitics } from '@menokws/patient-management-data';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'menokws-patient-stastitics',
  templateUrl: './patient-stastitics.component.html',
  styleUrls: ['./patient-stastitics.component.scss'],
})
export class PatientStastiticsComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: RequestService<any>, private config : DynamicDialogConfig) { }
  submitted: boolean = false
  stastitics!: Stastitics
  form!: FormGroup
  @Output() next = new EventEmitter<any>();
  @Input() patient!: Patient
  @Input() isEdit : boolean = false

  ngOnInit(): void {
      this.stastitics =  this.config.data ? this.config.data.stastitics : new Stastitics()
      this.isEdit = this.config.data ? this.config.data.isEdit : false
    this.form = this.fb.group({
      language: [this.stastitics.language, [Validators.required]],
      race: [this.stastitics.race, [Validators.required]],
      ethnicity: [this.stastitics.ethnicity, [Validators.required]],
      family_size: [this.stastitics.family_size, [Validators.required]],
      financial_review_date: [this.stastitics.financial_review_date, [Validators.required]],
      monthly_income: [this.stastitics.monthly_income, [Validators.required]],
      religion: [this.stastitics.religion, [Validators.required]],
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
