import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';
import { Misc, Patient } from '@menokws/patient-management-data';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'menokws-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss'],
})
export class MiscComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: RequestService<any>, private config : DynamicDialogConfig) { }
  submitted: boolean = false
  misc!: Misc
  form!: FormGroup
  @Output() next = new EventEmitter<any>();
  @Input() patient!: Patient
  @Input() isEdit : boolean = false

  ngOnInit(): void {
      this.misc =  this.config.data ? this.config.data.misc : new Misc()
      this.isEdit = this.config.data ? this.config.data.isEdit : false
    this.form = this.fb.group({
      alive: [this.misc.alive, [Validators.required]],
      reason: [this.misc.reason, [Validators.required]],
    })
  }

  nextPage() {
    if (!this.form.valid) return
    console.log(this.form.value)
  }

}
