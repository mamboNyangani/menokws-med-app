import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_CONFIG } from '@menokws/core';
import { OverlayEmedLayoutModule } from '@menokws/emed-layout';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    OverlayEmedLayoutModule,
    BrowserAnimationsModule, 
    RouterModule
  ],
  providers: [
    {provide: APP_CONFIG, useValue : environment}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
