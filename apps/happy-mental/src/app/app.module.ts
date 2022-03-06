import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';

import '@vonage/vwc-button';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
