import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthUiRoutingModule } from './auth-ui-routing.module';
import { UtilsCoreModule } from '@menokws/core';

@NgModule({
  imports: [
    UtilsCoreModule,
    AuthUiRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthUiModule { }
