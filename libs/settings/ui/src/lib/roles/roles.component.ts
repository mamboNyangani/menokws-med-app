import { Component, OnInit } from '@angular/core';
import { RequestService } from '@menokws/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AddRolesComponent } from './add-roles/add-roles.component';

@Component({
  selector: 'menokws-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  roles: any;
  constructor(private requestService : RequestService<any>, private dialogService : DialogService) {}

  ngOnInit(): void {
    this.getRoles()
  }

  getRoles(){
    this.requestService.get(`role`).subscribe(res => {
      console.log(res)
      this.roles = res.roles
    })
  }

  deleteRole(role : any){
    console.log(role)
    this.requestService.delete(`role/${role.id}`, role.id).subscribe(res => {
      console.log(res)
    })
  }

  addRole(){
    this.dialogService.open(AddRolesComponent, {
      header: "Add Role",
      width: '55%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true
    })
  }
}
