import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from './prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



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

  ]
})
export class UtilsCoreModule {}
