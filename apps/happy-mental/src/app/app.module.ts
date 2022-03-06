import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewComponent } from './overview/overview.component';
import { AppRoutingModule } from './app-routing.module';
import { UserTableComponent } from './components/user-table/user-table.component';
import { PieComponent } from './components/charts/pie/pie.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";

import "@vonage/vwc-list";
import "@vonage/vwc-side-drawer";
import "@vonage/vwc-text";
import "@vonage/vwc-icon";
import '@vonage/vwc-list/vwc-list-item';
import "@vonage/vwc-data-grid"
import "@vonage/vwc-data-grid/vwc-data-grid-column"
import '@vonage/vwc-button';
import '@vonage/vwc-card';

import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, OverviewComponent, PieComponent, UserTableComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgxChartsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    const PieElement = createCustomElement(PieComponent, {injector: injector});
    window.customElements.define('chart-element', PieElement);
  }
}
