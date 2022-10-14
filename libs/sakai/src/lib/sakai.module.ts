import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from './layout/app.layout.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    AppLayoutModule
  ]
})
export class SakaiModule {}
