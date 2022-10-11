import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '@menokws/core';

@Component({
  selector: 'menokws-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.scss'],
})
export class AddRolesComponent implements OnInit {
  form! : FormGroup
  constructor(private fb : FormBuilder, private service : RequestService<any>) {}

  ngOnInit(): void {
    this.form = this.fb.group({

      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

  save(){
    if(!this.form.valid) return
    this.service.post(`role?name=${this.form.value.name}&description=${this.form.value.description}`, {})
    .subscribe(res => {
      console.log(res)
    })
  }
}
