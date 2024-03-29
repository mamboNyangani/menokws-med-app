import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'menokws-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.scss'],
})
export class AddRolesComponent implements OnInit {
  form! : FormGroup
  constructor(private fb : FormBuilder, private service : RequestService<any>, private messageService : MessageService, private ref : DynamicDialogRef) {}

  ngOnInit(): void {
    this.form = this.fb.group({

      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

  save(){
    if(!this.form.valid) return
    this.service.post(`add-role?name=${this.form.value.name}&description=${this.form.value.description}`, {})
    .subscribe(res => {
      this.messageService.add({severity:'success', summary:`Saved`, detail:'Role has been added successfully!'});
      this.ref.close()
    })
  }
}
