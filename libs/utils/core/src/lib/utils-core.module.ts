import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from './prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './services/interceptor';
import { ErrorInterceptor } from './services/error-interceptor';



const MODULES = [
  CommonModule,
  PrimeNGModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
 ]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class UtilsCoreModule {}
